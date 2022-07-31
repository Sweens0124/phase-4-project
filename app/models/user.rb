class User < ApplicationRecord
    has_many :items
    has_many :garage_sales, through: :items

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    
    has_secure_password
end

