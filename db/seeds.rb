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
Item.create(name: "Iphone 12", description: "Cell phone that has minor scraches, great camera and good battery life.", category: "Electronics", condition: "Good", price: 350 ,garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Taylormade Stealth Plus 10.5", description: "Driver with carbon face.", category: "Sports", condition: "Great", price: 525, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Rocking chair", description: "Vintage chair that is ideal for the patio not heavy rocking but subtle.", category: "Furniture", condition: "Good", price: 150, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Trek Mountain bike", description: "2012 model with front shocks, 7 gears comes with water bottle holders.", category: "Sports", condition: "Bad", price: 80, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Harlem Hoodie", description: "Black hoodie with Harlem print on it.", category: "Clothing", condition: "Good", price: 15, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Bose Headphones", description: "Bose headphones noice cancelling.", category: "Electronics", condition: "Great", price: 150, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Nike Phantom Soccer Boots", description: "Nike soccer cleats, these boots were designed to increase agility as well as speed, the material the face of the boot is used to give a better feel and touch with the ball.", category: "Sports", condition: "Good", price: 60, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Ninja Air Fryer", description: "Dual zone and match cooking were fantastic features. One scratch on top and scratch on the side.", category: "Appliances", condition: "Good", price: 100, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Nespresso", description: "Nespresso coffee maker.", category: "Appliances", condition: "Great", price: 150, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Grey Suit", description: "Mens suits. Jackets size 36 pants size 32.", category: "Clothing", condition: "Bad", price: 25, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Playstation 4", description: "Ps4 pro 1000 gigs. + 1 controller", category: "Electronics", condition: "Great", price: 250, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Picnic Table", description: "Wood picnic table. Very sturdy. Could use a little paint/stain and then good as new. Has a hole in the middle for umbrella.", category: "Furniture", condition: "Good", price: 100, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Projector screen", description: "Inflatable screen 100inch by 120inch.", category: "Electronics", condition: "Great", price: 45, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "BBQ Grill & Smoker", description: "Includes propane tank. Only used a handful of times in the past two years and the smoker side has never been used. There's also a side burner on one end.", category: "Appliances", condition: "Good", price: 150, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Pioneer DJ Decks", description: "The Pioneer DJ DDJ-REV1 matches perfectly with the free Serato DJ Lite software, boasting a battle-style layout that's easy to use and perfect for playing like a pro. The design of this 2-channel DJ controller emulates a professional DJM-S mixer + PLX turntable setup, including specialized features for open-format and scratch DJs.", category: "Music", condition: "Great", price: 220, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Microphone set", description: "These are 2017 mics and honestly was used only a handful of times before being stored away. I have all the cords and accessories it came with.", category: "Music", condition: "Bad", price: 45, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Fur Accent Chair with Ottoman Set", description: "Firm and Comfortable: The cushions you sit on are nice and firm. You'll never have to worry about sinking in. The more you sit in it, the better.", category: "Furniture", condition: "Great", price: 200, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Basketball", description: "Glow In The Dark Ball.", category: "Sports", condition: "Great", price: 12, garage_sale_id: 1, user_id: User.ids.sample)
Item.create(name: "Iron", description: "Easy Steam Compact Iron.", category: "Appliances", condition: "Bad", price: 25, garage_sale_id: 1, user_id: User.ids.sample)

puts "Seeding done!"
