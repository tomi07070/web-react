import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary" id='nav'>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/home'}>Home</Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/about'}>About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/services'}>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


</>
  )
}
