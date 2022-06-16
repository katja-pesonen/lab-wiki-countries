// Navbar: Displaying the basic navbar with the LAB name

import React from "react"
import { Link } from "react-router-dom"

function Navbar({countries}) {
    return (
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
           <div className="container">
         <h3>LAB - WikiCountries</h3>
         <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
    </div>
    )
}


export default Navbar;