class UserWithItemsSerializer < UserSerializer
  has_many :items
end
