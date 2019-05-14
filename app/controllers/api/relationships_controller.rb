class API::RelationshipsController < ApplicationController
  before_action :logged_in_user

  def create
    users = JSON.parse(request.body.read)
    @user = Relationship.new(followed_id: users["followedId"])
    current_user.follow(@user)
    render json: @users
    @user.save
  end

  def destroy
    @user = Relationship.find(params[:id]).followed
    current_user.unfollow(@user)
    redirect_to @user
  end
end
