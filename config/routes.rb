Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  namespace :api, { format: 'json' } do
    resources :messages
  end

  resources :messages      # only[:create, :destroy] #
  root to: 'messages#index'

  devise_scope :user do
    # root :to => "devise/sessions#new"
  # end
  get  '/sign_in'   to: 'users/sessions#new'  ##
  # get   '/signup',   to: 'users#new' #
  # get    '/login',   to: 'sessions#new' #
  # post   '/login',   to: 'sessions#create' #
  delete '/sign_out',  to: 'users/sessions#destroy' #
  resources :users
  # resources :account_activations, only: [:edit]
  # resources :password_resets,     only: [:new, :create, :edit, :update]
  end
end

# app/controllers/sessions_controller.rb
# protected
# def after_sign_in_path_for(resource)
  # root_path
  # '/posts'
# end
# def after_sign_out_path_for(resource)
  # root_path
# end
