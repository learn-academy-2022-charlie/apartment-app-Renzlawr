import React from 'react'
import {
  Card, 
  CardImg,
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button
} from 'reactstrap';

const ApartmentIndex = props => {

  const { apartments } = props

  return (
    <div>
      <h1>Apartments:</h1>
      {apartments && apartments.map((apartment) => {
        return(
          <Card key={apartment.id}>
            <CardImg src={apartment.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{apartment.street}</CardTitle>
              <CardSubtitle>{apartment.city}</CardSubtitle>
              <CardText>{apartment.state}</CardText>
              <CardText>{apartment.manager}</CardText>
              <CardText>{apartment.price}</CardText>
              <CardText>{apartment.bedrooms}</CardText>
              <CardText>{apartment.bathrooms}</CardText>
              <CardText>{apartment.pets}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default ApartmentIndex