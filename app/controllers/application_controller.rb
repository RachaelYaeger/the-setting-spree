class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :init_order
  def init_order
    @order = current_order
  end

  def create_inquiry
    @inquiry = Inquiry.new(params.require(:inquiry).permit(:name, :email, :datetime, :budget, :message, :customer_type))
    if @inquiry.valid?
      if @inquiry.save
        flash[:confirm] = "Your inquiry has been sent! We will contact you shortly."
        redirect_to "/"
      end
    else
      flash[:error] = "You are missing a required field in your inquiry."
      render :index
    end
  end
end
