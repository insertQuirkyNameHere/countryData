import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

import CountryCard from "./CountryCard";
import Banner from "./Banner";

import './css/root.css'

const App = _ =>{

  const [countries, setCountries] = useState([])
  const [countryInput, setCountryInput] = useState('')
  const [countriesToShow, setCountriesToShow] = useState([])

  //========================  useEffect to fetch list of all countries  =========================
  useEffect( () =>{
    axios.get('https://restcountries.com/v3.1/all')
      .then( response => {

        //===================== Sorting the countries in alphabetical order ====================
        response.data.sort( (a, b) => {
          a = a.name['common'];
          b = b.name['common'];
          if (a<b){
            return -1;
          }
          else if (a === b){
            return 0;
          }
          else{
            return 1;
          }
        })
        //==================== end of sort ================================
        setCountries(response.data);
        setCountriesToShow(response.data);
      })
      .catch( err => console.log('Error connecting to countries backend:', err) )
  },[])

  //====================  Country Input Field change handler  ======================
  const handleCountryInpChange = e =>{
    let inp = e.target.value;
    setCountryInput(inp);
    let re = new RegExp(inp, 'gi');
    let filteredCountries = countries.filter( country => country.name['common'].match(re) );
    setCountriesToShow(filteredCountries);
  }

  console.log(countriesToShow);
  return(
    <>
      <Banner />
      
      <section id="Filter countries">
        <input type="text" name="country" placeholder="Country name" onChange={handleCountryInpChange} value={countryInput}/>
      </section>

      <section id="Country-List">
        <h2>Filtered Countries</h2>
        <div className="country-card-container">
          {countriesToShow.map( (country, index) => <a key={index}> <CountryCard country={country}/> </a>)}
        </div>
      </section>
    </>
  )
}

export default App;