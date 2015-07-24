class StudioSlide < ActiveRecord::Base
  acts_as_list

  default_scope { order(:position) }

  belongs_to :site_setting

  has_attached_file :slide_image,
                    styles: { small: '100x100>' },
                    default_style: :original,
                    url: '/spree/products/:id/:style/:basename.:extension',
                    path: ':rails_root/public/spree/products/:id/:style/:basename.:extension',
                    convert_options: { all: '-strip -auto-orient -colorspace sRGB' }
  validates_attachment :slide_image,
    :presence => true,
    :content_type => { :content_type => %w(image/jpeg image/jpg image/png image/gif) }
end
