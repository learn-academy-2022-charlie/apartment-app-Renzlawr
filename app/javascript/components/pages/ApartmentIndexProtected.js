import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const ApartmentsIndexProtected = props => {

  const { apartments, user } = props

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
                  <NavLink to={`/apartmentshow/${apartment.id}`}>
                    <Button variant="primary">Go somewhere</Button>
                  </NavLink>
                </Card.Body>
              </Card>
          )}
        )
      }
    </div>
  )
}

export default ApartmentsIndexProtected