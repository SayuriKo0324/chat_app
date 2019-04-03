class UsersController < ApplicationController
  before_action :authenticate_user,  {only: [:index, :show, :edit, :update]}
　def index
  end

  def show
    @user = User.find(params[:id]) #
  end

  def new
    @user = User.find_by(id: params[:id])
  end

  def create
  end

  def login
    @user = User.find_by(email: params[:email], password: params[:password])
    if @user
      session[:user_id] = @user.id
      flash[:notice] = "ログインしました"
      redirect_to("/posts/index") # URLの確認
    else
      @error_message = "メールアドレスまたはパスワードが間違っています"
      @email = params[:email]
      @password = params[:password]
      render("users/login_form") # URLの確認
    end
  end
end
