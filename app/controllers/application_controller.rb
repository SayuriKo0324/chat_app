class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def after_sign_in_path_for(resource)
    if current_user
      flash[:notice] = "ログインに成功しました"
      root_path
    else
      flash[:notice] = "ChatAppへようこそ！早速、ユーザーを探してチャットを始めよう！"
      root_path
    end
  end

  def after_sign_out_path_for(resource)
    new_user_session_path
  end

end
