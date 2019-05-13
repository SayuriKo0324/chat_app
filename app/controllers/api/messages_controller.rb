class API::MessagesController < ApplicationController
    before_action :authenticate_user!
    def index
      @messages = Message.all
      render json: @messages
    end

    def create
      messages = JSON.parse(request.body.read)
      @message = Message.new(content: messages["message"], to_user_id: messages["toUserId"])
      render json: @message
      @message.save
    end
end
