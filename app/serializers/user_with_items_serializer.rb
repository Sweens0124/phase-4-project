class UserWithItemsSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :items
end
