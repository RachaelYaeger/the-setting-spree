module Spree
  class HomeController < Spree::StoreController
    helper 'spree/products'
    respond_to :html

    def index
      @searcher = build_searcher(params.merge(include_images: true))
      @products = @searcher.retrieve_products
      @taxonomies = Spree::Taxonomy.includes(root: :children)

      # Gets images from Instagram
      @images = []
      setting_insta_id = 1733984956
      insta_url = "https://api.instagram.com/v1/users/#{setting_insta_id}/media/recent/?client_id=#{ENV['insta_client_id']}"
      resp = HTTParty.get(insta_url)
      data = resp["data"]
      data.take(6).each do |obj|
        @images << obj["images"]["low_resolution"]["url"]

      # Cart logic for order. Comes from Spree OrdersController edit action
        @order = current_order || Order.incomplete.find_or_initialize_by(guest_token: cookies.signed[:guest_token])
        associate_user
      end
      
    end
  end
end