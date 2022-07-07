class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end
  
    def create
        apartment = Apartment.create(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment, status: 422
        end
    end
  
    def update
    end
  
    def destroy
    end

    private
    def apartment_params
        params.require(:apartments).permit(:city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image, :user_id)
    end
end
