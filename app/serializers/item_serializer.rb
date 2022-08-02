class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :condition, :price, :image
  has_one :garage_sale
  has_one :user
end
