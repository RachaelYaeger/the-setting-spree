Deface::Override.new(
  virtual_path: 'spree/admin/shared/sub_menu/_configuration',
  name: 'site_settings_admin_configurations_menu',
  insert_bottom: '[data-hook="admin_configurations_sidebar_menu"]',
  text: '<%= configurations_sidebar_menu_item "Site Settings", edit_admin_site_settings_url %>'
)
