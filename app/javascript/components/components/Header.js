import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

 const Header = props => {
  const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = props
    
  return (
    <>
        <Navbar bg="dark" variant="dark">
          <Nav>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/apartmentindex">Apartments</NavLink>
            <NavLink className="nav-link" to="about">About</NavLink>
            {logged_in &&
            <div id="navbar-user-links">
              <NavLink className="nav-link" to="apartmentnew">Add Listing</NavLink>
              <NavLink className="nav-link" to="apartmentindexprotected">My Apartments</NavLink>
              <p className="nav-link">{current_user.email}</p>
              <Nav.Link href={sign_out_route} className="nav-link">
                Sign Out
              </Nav.Link>
            </div>
            }
            {!logged_in &&
            <div id="navbar-user-links">
              <Nav.Link href={sign_in_route} className="nav-link">
                Sign in
              </Nav.Link>
              <Nav.Link href={new_user_route} className="nav-link">
                Sign Up
              </Nav.Link>
            </div>
            }
          </Nav>
        </Navbar>
      </>
  )
}

export default Header