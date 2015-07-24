class AddAttachmentAboutImageToSiteSettings < ActiveRecord::Migration
  def self.up
    change_table :site_settings do |t|
      t.attachment :about_image
    end
  end

  def self.down
    remove_attachment :site_settings, :about_image
  end
end
