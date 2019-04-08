Rails.application.routes.draw do
  devise_for :users, controllers: {
                     registrations: 'users/registrations',
                     sessions: 'users/sessions'
                 }

  devise_scope :user do
    # new_user_session
    get 'users/sign_in', to: 'devise/sessions#new' #
#  user_session
    post  'users/sign_in',  to: 'devise/sessions#create'
# destroy_user_session
    delete  'users/sign_out', to: 'devise/sessions#destroy' #

# user_password
    post  'users/password', to:   'devise/passwords#create'
# new_user_password
    get    'users/password/new', to:  'devise/passwords#new'
# edit_user_password
    get    'users/password/edit',  to: 'devise/passwords#edit'
    patch  'users/password',       to: 'devise/passwords#update'
    put    'users/password',      to: 'devise/passwords#update'

# cancel_user_registration
    #　get    'users/cancel', to:       'devise/registrations#cancel'
# user_registration
    post   'users',        to:      'devise/registrations#create'
# new_user_registration
    get    'users/sign_up',  to:    'devise/registrations#new'
# edit_user_registration
    get    'users/edit',  to:      'devise/registrations#edit'
    patch  'users',   to:      'devise/registrations#update'
    put    'users',   to:      'devise/registrations#update'
    # delete 'users',   to:      'devise/registrations#destroy'
  end



  namespace :api, { format: 'json' } do
    resources :messages
  end

  resources :messages      # only[:create, :destroy] #
  root to: 'messages#index'


  # resources :account_activations, only: [:edit]
  # resources :password_resets,     only: [:new, :create, :edit, :update]
  # end
end
