class AddAttachmentSlideImageToStudioSlides < ActiveRecord::Migration
  def self.up
    change_table :studio_slides do |t|
      t.attachment :slide_image
    end
  end

  def self.down
    remove_attachment :studio_slides, :slide_image
  end
end
