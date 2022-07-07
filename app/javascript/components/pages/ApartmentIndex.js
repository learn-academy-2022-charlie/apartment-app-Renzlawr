import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'

const ApartmentIndex = props => {

  const { apartments } = props

  return (
    <div>
      <h1>Ratpartments:</h1>
      {apartments && apartments.map(apartment => {
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

export default ApartmentIndex