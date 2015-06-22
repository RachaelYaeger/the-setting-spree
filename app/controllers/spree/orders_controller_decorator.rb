Spree::OrdersController.class_eval do
  before_filter :check_for_duplicate_product, :only => :populate

  def check_for_duplicate_product
    p "check_for_duplicate_product..."
  end
end
