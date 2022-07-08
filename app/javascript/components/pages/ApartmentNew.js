import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'

const ApartmentNew = props => {

  const [submit, setSubmit] = useState(false)
  const [form, setForm] = useState({
      street: "",
      city: "",
      state: "",
      manager: "",
      email: "",
      price: "",
      bedrooms: null,
      bathrooms: null,
      pets: "",
      image: "",
      user_id: props.user.id
  })

  const handleChange = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
    form[targetName] = targetValue
    setForm(form)
    console.log(form)
  }

  const handleIntChange = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
    form[targetName] = parseInt(targetValue)
    setForm(form)
    console.log(form)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createApartment(form)
    props.readApartment()
    setSubmit(true)
  }

  return (
    <>
      <h1>Add your apartment!</h1>
      <Form>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control name="street" placeholder="Enter city" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control name="state" placeholder="Enter state" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Manager</Form.Label>
          <Form.Control name="manager" placeholder="Enter manager" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" placeholder="Enter email" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" placeholder="Enter price" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Bedrooms</Form.Label>
          <Form.Control name="bedrooms" type="number" placeholder="Enter bedrooms" onChange={handleIntChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Bathrooms</Form.Label>
          <Form.Control name="bathrooms" type="number" placeholder="Enter bathrooms" onChange={handleIntChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pets</Form.Label>
          <Form.Control name="pets" placeholder="Enter pets" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" placeholder="Enter image address" onChange={handleChange} />
        </Form.Group>
        <Button onClick={() => handleSubmit()} variant="primary" type="submit">
          Submit
        </Button>
        {submit === true ? <Navigate replace to="/apartmentindexprotected" /> : null}
      </Form>
    </>
  )
}

export default ApartmentNew