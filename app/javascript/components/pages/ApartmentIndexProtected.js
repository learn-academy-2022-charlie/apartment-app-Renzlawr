import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'

const ApartmentsIndexProtected = props => {

  const { apartments, user } = props
  console.log("pro", apartments)
  console.log("pro", user)

  let protectedApartments = apartments.filter(apartment => apartment.user_id === user.id)
  return (
    <div>
      <h1>Ratpartments:</h1>
      {protectedApartments && protectedApartments.map(apartment => {
        return(
              <Card key={apartment.id}>
                <Card.Img src={apartment.image} alt="Card image cap" />
                <Card.Body>
                  <Card.Title>Apartment #{apartment.id}</Card.Title>
                  <Card.Text>Street: {apartment.street}</Card.Text>
                  <Card.Text>City: {apartment.city}</Card.Text>
                  <Card.Text>State: {apartment.state}</Card.Text>
                  <Card.Text>Manager: {apartment.manager}</Card.Text>
                  <Card.Text>Price: {apartment.price}</Card.Text>
                  <Card.Text>Bedrooms: {apartment.bedrooms}</Card.Text>
                  <Card.Text>Bathrooms: {apartment.bathrooms}</Card.Text>
                  <Card.Text>Pets: {apartment.pets}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          )}
        )
      }
    </div>
  )
}

export default ApartmentsIndexProtected