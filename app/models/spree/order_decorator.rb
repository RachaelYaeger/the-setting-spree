Spree::Order.class_eval do
  def confirmation_required?
    false
  end
end
