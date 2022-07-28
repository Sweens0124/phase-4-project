puts "Deleting old data"

GarageSale.destroy_all
Item.destroy_all
user.destroy_all

puts "seeding data"

GarageSale