Spree::Order.class_eval do
  def confirmation_required?
    false
  end

  def shipping_eq_billing_address?
    !ship_address.empty? && bill_address.same_as?(ship_address)
  end
end
