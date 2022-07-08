require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  user = User.where(email: 'test1@gmail.com').first_or_create(password: '123123', password_confirmation: '123123')

  user.apartments.create(
    street: "2942 ratopolis lane",
    city: "Los Angeles",
    state: "California",
    manager: "Rat Lord",
    email: "biggestratwhoeatsallofthecheese@gmail.com", 
    price: "10 blocks of swiss", 
    bedrooms: 5, 
    bathrooms: 3, 
    pets: "no pets",
    image: "https://bloximages.chicago2.vip.townnews.com/ladowntownnews.com/content/tncms/assets/v3/editorial/3/82/3824715a-a4f7-11e9-a9ea-73ab3cf22228/5d290e93b22c8.image.jpg"
  )
  describe "GET /index" do
    it 'returns a list of apartments' do
    

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
    end
  end

  describe "POST /create" do

    it 'can create an apartment' do
      apartment_params = {
        apartment: {
          street: "2942 ratopolis lane",
          city: "Los Angeles",
          state: "California",
          manager: "Rat Lord",
          email: "biggestratwhoeatsallofthecheese@gmail.com", 
          price: "10 blocks of swiss", 
          bedrooms: 5, 
          bathrooms: 3, 
          pets: "no pets",
          image: "https://bloximages.chicago2.vip.townnews.com/ladowntownnews.com/content/tncms/assets/v3/editorial/3/82/3824715a-a4f7-11e9-a9ea-73ab3cf22228/5d290e93b22c8.image.jpg",
          user_id: user.id
        }
      }

      post '/apartments', params: apartment_params

      expect(response).to have_http_status(200)
      apartment = Apartment.first
      expect(apartment['street']).to eq "2942 ratopolis lane"
      expect(apartment['city']).to eq "Los Angeles"
      expect(apartment['state']).to eq "California"
      expect(apartment['manager']).to eq "Rat Lord"
      expect(apartment['email']).to eq "biggestratwhoeatsallofthecheese@gmail.com"
      expect(apartment['price']).to eq "10 blocks of swiss"
      expect(apartment['bedrooms']).to eq 5
      expect(apartment['bathrooms']).to eq 
      expect(apartment['pets']).to eq "no pets"
      expect(apartment['image']).to eq "https://bloximages.chicago2.vip.townnews.com/ladowntownnews.com/content/tncms/assets/v3/editorial/3/82/3824715a-a4f7-11e9-a9ea-73ab3cf22228/5d290e93b22c8.image.jpg"
      expect(apartment['user_id']).to eq user.id
    end
  end
end