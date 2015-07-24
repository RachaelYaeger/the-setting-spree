class AddAttachmentBannerImageToSiteSettings < ActiveRecord::Migration
  def self.up
    change_table :site_settings do |t|
      t.attachment :banner_image
    end
  end

  def self.down
    remove_attachment :site_settings, :banner_image
  end
end
