import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/lvmc-logo.png'

const Footer = class extends React.Component {
  render() {
    return (
     
      <div className="pageFooter">
        <section className="footer-stripe pt-md-2 pb-md-2"><div className="container-fluid"><div className="row"><div className="col-md-12"></div></div></div></section>
        <footer className="spacer-y-2 bg-dark">
          <div className="container">
              <div className="row">
                  <div className="col-6 col-md-3 mb-3 mb-md-0">
                      <h5 className="text-white">Locations</h5>
                      <ul className="list-unstyled">
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Comprehensive Care Center</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Hematology-Oncology</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Lompoc Valley Medical Center</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">North H Center</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">North Third Center</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Orthopedic Center</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Sleep Disorder Center</Link> </li>

                      </ul>

                  </div>
                  <div className="col-6 col-md-3 mb-3 mb-md-0">
                      <h5 className="text-white">About Us</h5>
                      <ul className="list-unstyled">
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Our Story</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Leadership Team</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Board of Directors</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Board Meeting Agendas</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">District Financials</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Municipal Service Review</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Mission Vision and Values</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Press</Link> </li>
                      </ul>
                  </div>
                  <div className="col-12 col-md-3 mb-3 mb-md-0">
                      <h5 className="text-white">Patient Resources</h5>
                      <ul className="list-unstyled">
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Blog</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Health and Wellness Library</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Medical Records</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Event Calendar</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Patient Feedback</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Online Bill Pay</Link> </li>
                          <li className="py-0 py-md-1"><Link className="text-white opacity-60">Patient and Family Advisory Council</Link> </li>
                      </ul>
                  </div>
                  <div className="col-12 col-md-3">
                      <h5 className="text-white">Find a Doctor</h5>
                      <h5 className="text-white">Services</h5>
                      <h5 className="text-white">Careers </h5>
                  </div>
              </div>
              <div className="row mt-3 mt-md-4">
                  <div className="col">
                      <span className="text-small text-white">&copy; 2019 Lompoc Valley Medical Center.</span>
                  </div>
              </div>
              <div className="row mt-3">
                  <div className="col">
                      <ul className="list-unstyled d-flex list-pipe-separator">
                          <li><Link className="text-small text-white opacity-50">Privacy Policy</Link> </li>
                          <li><Link className="text-small text-white opacity-50">Terms and Conditions</Link> </li>
                          <li><Link className="text-small text-white opacity-50">Information Statement</Link> </li>
                          <li><Link className="text-small text-white opacity-50">Sitemap</Link> </li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
    </div>

    )
  }
}

export default Footer
