Rails.application.routes.draw do
  namespace :api, { format: 'json' } do
    resources :messages
  end

  resources :messages      # only[:create, :destroy] #
  root to: 'messages#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: "users/sessions",
  }

  devise_scope :user do
# new_user_session
    get 'users/sign_in', to: 'users/sessions#new' #
#  user_session
    post  'users/sign_in',  to: 'users/sessions#create'
# destroy_user_session
    delete  'users/sign_out', to: 'users/sessions#destroy' #

# user_password
    post  'users/password', to:   'users/passwords#create'
# new_user_password
    get    'users/password/new', to:  'users/passwords#new'
# edit_user_password
    get    'users/password/edit',  to: 'users/passwords#edit'
    patch  'users/password',       to: 'users/passwords#update'
    put    'users/password',      to: 'users/passwords#update'

# cancel_user_registration
    #　get    'users/cancel', to:       'devise/registrations#cancel'
# user_registration
    post   'users',        to:      'users/registrations#create'
# new_user_registration
    get    'users/sign_up',  to:    'users/registrations#new'
# edit_user_registration
    get    'users/edit',  to:      'users/registrations#edit'
    patch  'users',   to:      'users/registrations#update'
    put    'users',   to:      'users/registrations#update'
    # delete 'users',   to:      'devise/registrations#destroy'
  end
  resources :users
  # resources :account_activations, only: [:edit]
  # resources :password_resets,     only: [:new, :create, :edit, :update]
  # end
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
