class SiteSetting < ActiveRecord::Base

  has_many :studio_slides

  accepts_nested_attributes_for :studio_slides, allow_destroy: true

  has_attached_file :banner_image,
                    styles: { small: '100x100>' },
                    default_style: :original,
                    default_url: 'https://s3.amazonaws.com/the-setting-staging.herokuapp.com/spree/general-images/landing_1.jpg',
                    url: '/spree/products/:id/:style/:basename.:extension',
                    path: ':rails_root/public/spree/products/:id/:style/:basename.:extension',
                    convert_options: { all: '-strip -auto-orient -colorspace sRGB' }
  validates_attachment :banner_image,
    :content_type => { :content_type => %w(image/jpeg image/jpg image/png image/gif) }


  has_attached_file :about_image,
                    styles: { small: '100x100>' },
                    default_style: :original,
                    default_url: 'https://s3.amazonaws.com/the-setting-staging.herokuapp.com/spree/general-images/about_1.png',
                    url: '/spree/products/:id/:style/:basename.:extension',
                    path: ':rails_root/public/spree/products/:id/:style/:basename.:extension',
                    convert_options: { all: '-strip -auto-orient -colorspace sRGB' }
  validates_attachment :about_image,
    :content_type => { :content_type => %w(image/jpeg image/jpg image/png image/gif) }

end
