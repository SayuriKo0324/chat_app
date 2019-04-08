class API::MessagesController < ApplicationController
  before_action :authenticate_user!, only: :show
  def index
    @messages = Message.all
    render json: @messages
    flash[:notice] = "ログインまたは登録が必要です。" unless user_signed_in?
  end

  def show
  end
end
