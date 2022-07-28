class User < ApplicationRecord
    has_mamy :items
    has_many :garage_sales, through: :items
end
