class API::MessagesController < ApplicationController
    before_action :authenticate_user # ここでいいの？
    def index
      @messages = Message.all
      render json: @messages
    end
end
