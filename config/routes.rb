Spree::Core::Engine.add_routes do
  namespace :admin do
    resource :site_settings, only: [:edit, :update]
  end
end

Rails.application.routes.draw do
  resources :site_settings
  post "/remove" => "application#remove"
  post "/inquiries" => "application#create_inquiry"
  mount Spree::Core::Engine, :at => '/'
end
