Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :articles
      resources :stocks
    end
  end

  get '*path', to: 'pages#index', via: :all
end
