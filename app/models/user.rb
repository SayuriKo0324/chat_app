class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :confirmable, and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable, :timeoutable
  validates :name, presence: true, uniqueness: true

  has_many :active_relationships, foreign_key: "follower_id", class_name: "Relationship", dependent: :destroy
  has_many :following, through: :active_relationships,  source: :followed

  has_many :passive_relationships, foreign_key: "followed_id", class_name: "Relationship", dependent: :destroy
  has_many :followers, through: :passive_relationships, source: :follower

  # ユーザーをフォローする
  def follow(other_user)
    following << other_user
    # active_relationships.create!(followed_id: other_user.id)
  end

  # ユーザーをフォロー解除する
  def unfollow(other_user)
    active_relationships.find_by(followed_id: other_user.id).destroy
  end

  # 現在のユーザーがフォローしてたらtrueを返す
  def following?(other_user)
    following.include?(other_user)
  end
end
