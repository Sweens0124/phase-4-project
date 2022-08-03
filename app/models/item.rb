class Item < ApplicationRecord
  # has_one_attached :image
  belongs_to :garage_sale
  belongs_to :user

end
