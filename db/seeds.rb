# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.where(email: 'test1@gmail.com').first_or_create(password: '123123', password_confirmation: '123123')

apartmets = [
    {
        street: "2942 ratopolis lane",
        city: "Los Angeles",
        state: "California",
        manager: "Rat Lord",
        email: "biggestratwhoeatsallofthecheese@gmail.com", 
        price: "10 blocks of swiss", 
        bedrooms: "5", 
        bathrooms: "3", 
        pets: "no pets",
        image: "https://bloximages.chicago2.vip.townnews.com/ladowntownnews.com/content/tncms/assets/v3/editorial/3/82/3824715a-a4f7-11e9-a9ea-73ab3cf22228/5d290e93b22c8.image.jpg"
    },
    {
        street: "1234 random circle",
        city: "Lakeland",
        state: "Florida",
        manager: "Jimmy",
        email: "Jimmyrando@gmail.com",
        price: "Your months paycheck",
        bedrooms: "1",
        bathrooms: "0.5",
        pets: "no pets",
        image: "https://www.vmcdn.ca/f/files/via/images/buildings/tinykitchen2.png;w=960;h=640;bgcolor=000000"
    }
]

apartmets.each do | apartment |
    user1.apartments.create apartment
end

p user1.apartments
p "Apartments seeded successfully"