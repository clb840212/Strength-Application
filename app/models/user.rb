#model
class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :user_name, presence: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def admin?
    role == 'admin'
  end
end
