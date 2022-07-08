require 'rails_helper'

RSpec.describe Apartment, type: :model do
  user2 = User.where(email: 'test2@gmail.com').first_or_create(password: '123123', password_confirmation: '123123')

  it 'will create an apartment' do
    user2.apartments.create(
        street: "1234 this is a test",
        city: "chicken",
        state: "Kentucky",
        manager: "Colonel Sanders",
        email: "fingerlickingood@kfc.com", 
        price: "$2000", 
        bedrooms: "3", 
        bathrooms: "2", 
        pets: "chickens allowed, however they may go missing",
        image: "https://dynl.mktgcdn.com/p/r5XbuSxbUYgVfHDYkzTVPNc8_SXK-xHiHzBpy3SW2p0/1900x1425.jpg"
      )

      apartments = Apartment.all
      expect(apartments.length).to eq 1
  end
  it 'will not create an apartment if it is missing an item' do
    apartment = user2.apartments.create(
      city: "chicken",
      state: "Kentucky",
      manager: "Colonel Sanders",
      email: "fingerlickingood@kfc.com", 
      price: "$2000", 
      bedrooms: "3", 
      bathrooms: "2", 
      pets: "chickens allowed, however they may go missing",
      image: "https://dynl.mktgcdn.com/p/r5XbuSxbUYgVfHDYkzTVPNc8_SXK-xHiHzBpy3SW2p0/1900x1425.jpg"
    )

    expect(apartment.errors[:street]).to_not be_empty 
  end

  it 'will not create an apartment if image is too short' do
    apartment = user2.apartments.create(
      street: "1234 this is a test",
      city: "chicken",
      state: "Kentucky",
      manager: "Colonel Sanders",
      email: "fingerlickingood@kfc.com", 
      price: "$2000", 
      bedrooms: "3", 
      bathrooms: "2", 
      pets: "chickens allowed, however they may go missing",
      image: "https://"
    )

    expect(apartment.errors[:image]).to_not be_empty 
  end
end
