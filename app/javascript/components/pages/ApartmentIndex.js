import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

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
                  <NavLink to={`/apartmentshow/${apartment.id}`}>
                    <Button variant="primary">Show More</Button>
                  </NavLink>
                </Card.Body>
              </Card>
          )}
        )
      }
    </div>
  )
}

export default ApartmentIndex