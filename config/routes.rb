Rails.application.routes.draw do
  namespace :api, { format: 'json' } do
    resources :messages
  end

  resources :messages
  root to: 'messages#index'

  # devise_for :users

  devise_for :users, :controllers => {
  :registrations => 'users/registrations',
  :sessions => 'users/sessions',
  :passwords => 'users/passwords'
 }
 resources :users, :only => [:show]
end
