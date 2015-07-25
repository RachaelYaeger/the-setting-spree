Spree::HomeController.class_eval do
  before_filter :set_site_settings, :only => :index

  def index
    @searcher = build_searcher(params.merge(include_images: true))
    @products = @searcher.retrieve_products.order("grid_position ASC")
    @taxonomies = Spree::Taxonomy.includes(root: :children)
  end

  def set_site_settings
    @ss = SiteSetting.first
  end
end
