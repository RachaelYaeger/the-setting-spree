class CreateStudioSlides < ActiveRecord::Migration
  def change
    create_table :studio_slides do |t|
      t.integer :position
      t.integer :site_setting_id

      t.timestamps null: false
    end
  end
end
