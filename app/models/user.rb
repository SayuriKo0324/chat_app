class User < ActiveRecord::Base
  has_many :microposts, dependent: :destroy #
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :timeoutable # :omniauthable # :lockable
  before_save :downcase_email
  # ?before_create :create_activation_digest
  validates :name,  presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  has_secure_password
   # validates :password, presence: true, length: { minimum: 6 }, allow_nil: true
  # has_many :following, through: :active_relationships,  source: :followed
  # has_many :followers, through: :passive_relationships, source: :follower
  # ?attr_accessor :remember_token, :activation_token, :reset_token
end
