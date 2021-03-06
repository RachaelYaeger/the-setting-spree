class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include ActionView::Helpers::NumberHelper

  before_action :init_order
  def init_order
    @order = current_order rescue nil
  end

  def create_inquiry
    @inquiry = Inquiry.new(params.require(:inquiry).permit(:name, :email, :datetime, :budget, :message, :customer_type))
    if @inquiry.valid? && @inquiry.save
      InquiryMailer.new_inquiry(@inquiry).deliver_now
      render js: "
        $('#inquiry-response').attr('class', '')
        $('#inquiry-response').html('Your inquiry has been sent! We will contact you shortly.');
      "
    else
      render js: "
        $('#inquiry-response').attr('class', 'error')
        $('#inquiry-response').html('You are missing a required field in your inquiry.');
      "
    end
  end

  def remove
    @order = Spree::Order.find(params[:order_id])
    @variant = @order.line_items.where(:variant_id => params[:variant_id]).first.variant
    @order.contents.remove(@variant)
    render plain: number_to_currency(@order.item_total)
  end

end
