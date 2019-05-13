class RenameUserIdToMessage < ActiveRecord::Migration
  def change
    rename_column :messages, :user_id, :to_user_id
  end
end
