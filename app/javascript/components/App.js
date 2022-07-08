import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentIndexProtected from './pages/ApartmentIndexProtected';
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import About from './pages/About'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


const App = props => {

  const [apartments, setApartments] = useState([])

  
  useEffect(() => {
    readApartment()
    return () => {
      
    }
  }, [])

  const readApartment = async () => {
    const apartments = await fetch("/apartments")
    apartments.json()
    .then(response => setApartments(response))
    .catch(errors => console.log(errors))
  }

  const createApartment = (newApartment) => {
    fetch("/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => setApartments(readApartment()))
    .catch(errors => console.log("Apartment create errors: ", errors))
  }
  
  const { current_user } = props

  return (
    <Router>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="/apartmentindexprotected" element={<ApartmentIndexProtected apartments={apartments} user={current_user}/> } />
        <Route path="/apartmentshow" element={<ApartmentShow />} />
        <Route path="/apartmentnew" element={<ApartmentNew user={current_user}/>} createApartment={createApartment} readApartment={readApartment}/>
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route path="/about" element={<About />} />
        <Route element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App