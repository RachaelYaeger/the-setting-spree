Spree::Product.class_eval do
  validates :grid_position, :presence => true
end