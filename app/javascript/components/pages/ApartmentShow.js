import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ApartmentShow = props => {
  const { apartments, logged_in, current_user } = props
  let { id } = useParams()
  let apartment = apartments.find(apartment => apartment.id == id)
  let usersApartment = apartments.find(apartment => apartment.id == id && apartment.user_id === current_user.id) 
  return (
    <>
    <h1>Now Viewing: </h1>
      {apartment && 
      <Card>
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
          {logged_in === true && usersApartment &&
            <div>
              <Button variant="warning">
                Edit
              </Button>
              <Button variant="danger">
                Delete
              </Button>
            </div>
          }
        </Card.Body>
      </Card>
      }
    </>
  )
}

export default ApartmentShow