// CountryDetails: This is the component that we will render via the 
// react-router-dom's Route, and it should receive the country code (alpha3Code)
//  via the URL.
// This is the id of the country (example: /ESP for Spain, /FRA for France).
import React from "react"
import { useParams } from "react-router"

function CountryDetails({countries}) {

    const {alpha3Code} = useParams()
    const showCountry = countries.filter((country) => country.alpha3Code === alpha3Code)[0]
    const flagImage = (`https://flagpedia.net/data/flags/icon/72x54/${showCountry.alpha2Code.toLowerCase()}.png`)
    console.log(flagImage)


    return (
        <div>Country Details
                  <div className="col-7">
                  <img src={flagImage} alt="country flag" />
            <h1>{showCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                {/* {style="width: 30%"} should be in bellow td */}
                  <td>Capital</td>
                  <td>{showCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {showCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  
                  <td>
                    <ul>
                    {showCountry.borders.forEach(
                    elem => {
                        <li><a href={`/${elem.alpha3Code}`}>{elem.name}</a></li>
                    })
                    }
                  
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
        </div>
    )
}


export default CountryDetails;
