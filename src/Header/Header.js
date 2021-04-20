import { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    {
      // alert(localStorage.getItem('token'))
      if (localStorage.getItem('token') && localStorage.getItem('userType')==='Customer') {

        var menu =

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/insert">Add Car</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/show">View Car</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/adminViewBookings">View Bookings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/viewCustomer">View Customer</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/logout">Log out</Link>
            </li>
        </ul>

      }
      else if(localStorage.getItem('token') && localStorage.getItem('userType')==='Owner') {
       var menu =
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home
                        <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewBookings">Bookings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Log out</Link>
            </li>
          </ul>
      }
      else {
        var menu =

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loginPage">Login</Link>
            </li>
          </ul>
      }
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-navbar">
        <div className="container">
          <img style={{height:"50px"}} className="logo" src="/TruckersNepal.png" alt="logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {menu}
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;