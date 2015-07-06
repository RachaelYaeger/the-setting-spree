class Spree::UserRegistrationsController < Devise::RegistrationsController
  helper 'spree/base'

  include Spree::Core::ControllerHelpers::Auth
  include Spree::Core::ControllerHelpers::Common
  include Spree::Core::ControllerHelpers::Order
  include Spree::Core::ControllerHelpers::Store

  before_filter :check_permissions, :only => [:edit, :update]
  skip_before_filter :require_no_authentication

  # POST /resource/sign_up
  def create
    puts params
    puts params[:mailer]
    @user = build_resource(spree_user_params)
    resource_saved = resource.save
    yield resource if block_given?
    if resource_saved
      # Checks if the newsletter mailer checkbox was checked.
      if params[:mailer]
        mailchimp = Mailchimp::API.new(ENV['MAILCHIMP_API_KEY'])
        mailchimp.lists.subscribe(ENV['MAILCHIMP_NEWSLETTER_ID'], 
          { "email" => @user.email
          })
      end
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up
        sign_up(resource_name, resource)
        session[:spree_user_signup] = true
        associate_user
        respond_with resource, location: after_sign_up_path_for(resource)
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}"
        expire_data_after_sign_in!
        respond_with resource, location: after_inactive_sign_up_path_for(resource)
      end
    else
      clean_up_passwords(resource)
      render :new
    end
  end

  protected
    def check_permissions
      authorize!(:create, resource)
    end

  private
    def spree_user_params
      params.require(:spree_user).permit(Spree::PermittedAttributes.user_attributes)
    end




end