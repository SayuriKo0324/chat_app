class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :content
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false # nullでいいの？
    end
    # add_index :messages, [:user_id, :created_at] # いる？
  end
end
