class API::UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
  end
end
