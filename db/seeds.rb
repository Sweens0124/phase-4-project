puts "Deleting old data"

GarageSale.destroy_all
Item.destroy_all
User.destroy_all

puts "Creating Garage Sale data..."

GarageSale.create(name: "CSS", location: "Denver")

puts "Creating Users..."

User.create(username: "Thomas", email: "tlncook85@gmail.com", password: "1985")
User.create(username: "Kiran", email: "kiranphillips61@gmail.com", password: "1993")
User.create(username: "Lucas", email: "lsweeney0124@gmail.com", password: "1996")
User.create(username: "Ikmann", email: "ikmann12@gmail.com", password: "2000")

puts "Creating Items for Sale..."

Item.create(name: "Acoustic guitar", description: "Six string Martin 0-X1E guitar. Concert size model. Dark Mahogony finish. Well taken care of.", category: "Music", condition: "Great", price: 250.75, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Playstation 4", description: "Gaming console with three games. GTA 5, Red Dead Redemption 2, and Madden 19.", category: "Electronics", condition: "Good", price: 120.00, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "iPhone 13", description: "Cell phone, with case and screen protector.", category: "Electronics", condition: "Great", price: 75.50, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Set of four chairs", description: "Solid wood dining chairs with a nice dark stain.", category: "Furniture", condition: "Good", price: 100, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Sports balls", description: "Set of used Sports balls. Includes Football, Baseball with mit, Volleyball, and Soccerball.", category: "Sports", condition: "Bad", price: 35, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Paddle board", description: "slightly used. You can either use your knees or stand on this board. Loads of fun.", category: "Sports", condition: "Great", price: 350.99, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Guitar amp", description: "Fender Amp with two 10 inch speakers, old and scratched but still works great.", category: "Music", condition: "Bad", price: 75, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Air Jordans 1 mid", description: "Worn only a few times. Still look new. Colors are red, white, and black.", category: "Clothing", condition: "Great", price: 200, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Desk", description: "Solid light wood desk. Minor scratches and dings.", category: "Furniture", condition: "Good", price: 80, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Tv", description: "75 inch Samsung class 7 series LED 4k UHD smart tv.", category: "Electronics", condition: "Great", price: 400, garage_sale_id: 1, user_id: User.ids.sample)

puts "Seeding done!"
