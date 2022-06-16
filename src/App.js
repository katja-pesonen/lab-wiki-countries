import "./App.css";
import { useState, useEffect } from "react";
import countriesJSON from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import {Route, Routes} from 'react-router-dom'



function App() {

  const [countries, setCountries] = useState(countriesJSON)

  return ( 

  <div className="App">

     <Navbar countries={countries} />

     <div className="container">
       <div className="row">

     <CountriesList countries={countries} />

     <Routes>
        <Route path="/" element={ <Navbar countries={countries} /> } />
        <Route path="/:alpha3Code" element={ <CountryDetails countries={countries} /> } />
     </Routes>

      </div>
    </div>
 </div>

  )
}


export default App;
