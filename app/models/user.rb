class User < ApplicationRecord
    has_many :items
    has_many :garage_sales, through: :items

    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

end
