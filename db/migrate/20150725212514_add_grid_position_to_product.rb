class AddGridPositionToProduct < ActiveRecord::Migration
  def change
    add_column :spree_products, :grid_position, :integer, :default => false
  end
end
