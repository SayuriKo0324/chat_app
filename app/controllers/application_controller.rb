class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  # 下のが原因でエラーがおきたから一旦けした
  # before_action :authenticate_user!
  before_action :set_current_user

  def set_current_user
    @current_user = User.find_by(id: session[:user_id])
  end

  def authenticate_user
    if @current_user == nil
      flash[:notice] = "ログインが必要です"
      redirect_to("users/sign_in")
    end
  end

  def forbid_login_user
    if @current_user
      flash[:notice] = "すでにログインしています"
      redirect_to("/messages/index")
    end
  end


  protected
    def configure_permitted_parameters
      # devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:name, :email, :password, :password_confirmation, :remember_me) }
      # devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:login, :name, :email, :password, :remember_me) }
      # devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:name, :email, :password, :password_confirmation, :current_password) }
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password, :password_confirmation, :remember_me])
      devise_parameter_sanitizer.permit(:sign_in, keys: [:login, :name, :email, :password, :remember_me])
      devise_parameter_sanitizer.permit(:account_update, keys: [:name, :email, :password, :password_confirmation, :current_password])
    end
end
