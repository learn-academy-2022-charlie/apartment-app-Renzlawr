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
      expect(apartments.length).to eq(1)
    end
  end
end