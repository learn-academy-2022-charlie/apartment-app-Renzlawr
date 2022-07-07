require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it 'returns a list of apartments' do
    
      user = User.where(email: 'test1@gmail.com').first_or_create(password: '123123', password_confirmation: '123123')

      user.apartments.create(
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
      )

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /create" do

    user = User.where(email: 'test1@gmail.com').first_or_create(password: '123123', password_confirmation: '123123')

    it 'can create an apartment' do
      apartment_params = {
        street: "1234 this is a test",
        city: "chicken",
        state: "Kentucky",
        manager: "Colonel Sanders",
        email: "fingerlickingood@kfc.com", 
        price: "$2000", 
        bedrooms: "3", 
        bathrooms: "2", 
        pets: "chickens allowed, however they may go missing",
        image: "https://dynl.mktgcdn.com/p/r5XbuSxbUYgVfHDYkzTVPNc8_SXK-xHiHzBpy3SW2p0/1900x1425.jpg",
        user: user.id
      }

      post '/apartments', params: apartment_params

      expect(response.status).to eq 200
    end
  end
end