class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :confirmable, and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable, :timeoutable

  validates :name, presence: true, uniqueness: true
end
