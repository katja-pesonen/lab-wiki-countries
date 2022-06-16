// CountriesList: Displays the list of links with the country names. 
// Each link should be a react-router-dom Link which we will use to 
// send the country code (alpha3Code) via the URL.

import React from "react"
import { Link } from "react-router-dom"

function CountriesList({countries}) {


    return (
        <div>

<div className="container">

  <div className="row">
  {/* this should be in below div:  style="max-height: 90vh; overflow: scroll" */}
    <div className="col-5" >
      <div className="list-group">
        <a className="list-group-item list-group-item-action" href="/ABW"
          >🇦🇼 Aruba</a
        >
        <a className="list-group-item list-group-item-action" href="/AFG"
          >🇦🇫 Afghanistan</a
        >
                      <a className="list-group-item list-group-item-action" href="/AIA"
                >🇦🇮 Anguilla</a
              >
              <a className="list-group-item list-group-item-action" href="/ALA"
                >🇦🇽 Åland Islands</a
              >
              <a className="list-group-item list-group-item-action" href="/ALB"
                >🇦🇱 Albania</a
              >
              <a className="list-group-item list-group-item-action" href="/AND"
                >🇦🇩 Andorra</a
              >
              <a className="list-group-item list-group-item-action" href="/ARE"
                >🇦🇪 United Arab Emirates</a
              >
              <a className="list-group-item list-group-item-action" href="/ARG"
                >🇦🇷 Argentina</a
              >
              <a className="list-group-item list-group-item-action" href="/ARM"
                >🇦🇲 Armenia</a
              >
              <a className="list-group-item list-group-item-action" href="/ASM"
                >🇦🇸 American Samoa</a
              >
              <a className="list-group-item list-group-item-action" href="/ATA"
                >🇦🇶 Antarctica</a
              >
              <a className="list-group-item list-group-item-action" href="/FLK"
                >🇫🇰 Falkland Islands</a
              >

      </div>
    </div>
 
  </div>
  </div>
  </div>
 )
}



export default CountriesList;


