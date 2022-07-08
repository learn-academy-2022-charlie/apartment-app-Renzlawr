class Apartment < ApplicationRecord
    validates :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image, presence: true
    validates :image, length: { minimum: 8 }
    belongs_to :user
end
