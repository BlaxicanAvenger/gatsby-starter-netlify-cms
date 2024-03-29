import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/lvmc-logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
            <div className="d-flex order-lg-1">
              <Link to="/" className="nav-link" title="Logo">
                <img src={logo} alt="Kaldi" className="img-fluid" />
              </Link>
            <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target=".navMenu" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="navbar-collapse justify-content-between navMenu order-lg-2 collapse">
                <div className="dropdown"></div>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                </ul>
            </div>
        </div>
    </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 primary-menu">
        <div className="container">
          <div className="navbar-collapse navMenu collapse">
            <ul className="navbar-nav nav-tabs border-0">
              <li className="nav-item">
                <Link className="nav-link" to="/providers">
                  Find a Doctor
                </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/locations">
                    Locations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Patient Resources
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
