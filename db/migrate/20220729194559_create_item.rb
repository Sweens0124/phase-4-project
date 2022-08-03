class CreateItem < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :category
      t.string :condition
      t.float :price
      t.string :image
      t.belongs_to :garage_sale, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
