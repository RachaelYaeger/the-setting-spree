class CreateSiteSettings < ActiveRecord::Migration
  def change
    create_table :site_settings do |t|
      t.text :intro_text
      t.string :studio_caption
      t.string :about_caption
      t.string :about_text_left
      t.string :about_text_right

      t.timestamps null: false
    end
  end
end
