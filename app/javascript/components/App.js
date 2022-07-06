import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
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
  return (
    <Router>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/apartmentindex" element={<ApartmentIndex />} />
        <Route path="/apartmentshow" element={<ApartmentShow />} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route path="/about" element={<About />} />
        <Route element={<NotFound />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App