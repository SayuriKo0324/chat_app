Rails.application.routes.draw do
  namespace :api, { format: 'json' } do
    resources :messages
    resources :users, :only => [:index]
    get '/users/search' => 'users#index'
    post '/users/search' => 'users#index'
  end

  resources :messages      # only[:create, :destroy] #
  root to: 'messages#index'
  get '/users/search' => 'users#index'

  devise_for :users, :controllers => {
  :registrations => 'users/registrations',
  :sessions => 'users/sessions',
  :passwords => 'users/passwords'
 }
  resources :users, :only => [:show]
end
