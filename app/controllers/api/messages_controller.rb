class API::MessagesController < ApplicationController
  before_action :authenticate_user!
  def index
    @messages = Message.all
    render json: @messages
  end
end
