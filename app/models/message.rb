class Message < ActiveRecord::Base
  belongs_to :user
  # mount_uploader :picture, PictureUploader
  validates :to_user_id, presence: true
  validates :from_user_id, presence: true
  validates :content, presence: true, length: {maximum: 140} #
  # validate  :picture_size
end

# private
    # アップロードされた画像のサイズをバリデーションする
  # def picture_size
    # if picture.size > 5.megabytes
      # errors.add(:picture, "should be less than 5MB") # pictureのカラムを足してから
    # end
  # end
# end
