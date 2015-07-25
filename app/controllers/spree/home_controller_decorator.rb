Spree::HomeController.class_eval do
  before_filter :set_site_settings, :only => :index

  def set_site_settings
    @ss = SiteSetting.first
  end
end
