class API::UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    users = JSON.parse(request.body.read)
    @users = User.where('name LIKE ?', "#{users["user_name"]}%")
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
  end
end 
