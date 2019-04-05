# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  before_action :authenticate_user,  {only: [:index, :show, :edit, :update]}
  before_action :forbid_login_user, {only: [:new, :create, :login_form, :login]}
  # GET /resource/sign_in
  def new
    super
    # @user = User.find_by(id: params[:id])
  end

  # POST /resource/sign_in
  def create
   super
    # user = User.find_by(email: params[:session][:email].downcase)
    # if user && user.authenticate(params[:session][:password])
   # ユーザーログイン後にユーザー情報のページにリダイレクトする
    # else
     # flash.now[:danger] = 'メールアドレスまたはパスワードが間違っています'
     # render 'new'
    # end
  end

  # DELETE /resource/sign_out
  def destroy
     super
  end

  def login
    @user = User.find_by(email: params[:email], password: params[:password])
    if @user
      session[:user_id] = @user.id
      flash[:notice] = "ログインしました"
      redirect_to("/messages/index") # URLの確認
    else
      @error_message = "メールアドレスまたはパスワードが間違っています"
      @email = params[:email]
      @password = params[:password]
      render("users/sign_in") # URLの確認
    end
  end
  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
