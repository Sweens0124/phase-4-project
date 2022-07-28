class User < ApplicationRecord
    has_mamy :items
    has_many :garage_sales, through: :items

    validates :name, presence: true, uniquness: true
    validates :email, presence: true, uniquness: true

end
