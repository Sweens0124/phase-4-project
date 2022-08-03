class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :description, :category, :condition, :price, :image
  has_one :garage_sale
  has_one :user

  # def image
  #   rails_blob_path(object.image, only_path: true) if object.image.attached?
  # end

end
