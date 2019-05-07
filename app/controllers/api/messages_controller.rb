class API::MessagesController < ApplicationController
    before_action :authenticate_user!
    def index
      @messages = Message.all
      render json: @messages
    end

    def create
      messages = JSON.parse(request.body.read)
      @message = Message.new(content: messages["message"], user_id: messages["userId"])
      render json: @message
      @message.save
    end
end
