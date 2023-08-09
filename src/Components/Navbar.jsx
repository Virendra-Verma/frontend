import React from 'react'
import { NavLink } from 'react-router-dom'
import useUserContext from '../UserContext'

const Navbar = () => {

  const {loggedIn, logout} = useUserContext();

  const showLoginOption = () => {
    if(loggedIn){
      return <li className='nav-item'>
        <button onClick={logout} className='btn btn-danger'>LogOut</button>
        </li>
    } else {
      return (
        <>
          <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/signup">
            SignUp
          </NavLink>
        </li>
        </>
      )
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/home">
            Home
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/events">
            Event Handling
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/state">
            State Management
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/todo">
            To-Do
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/chat">
            Chat
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/contact">
            Contact Us
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/browse">
            Browse
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/product">
            Product
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/manageuser">
            Manage User
          </NavLink>
        </li>

        {showLoginOption()}
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar