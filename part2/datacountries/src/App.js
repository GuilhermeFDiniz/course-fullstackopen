import axios from 'axios'
import { useState, useEffect } from "react";
import CountriesList from './components/CountriesList';


function App() {
  const [countries, setCountries] = useState([])
  const [countriesFilter, setCountriesFilter] = useState([])

  const url = 'https://restcountries.com/v3.1/all'

  useEffect(() => {
    axios.get(url)
    .then(response => response.data)
    .then(data => setCountries(data))
  })

  const handleFilter = (event) => {
    const inputText = event.target.value.toLowerCase()
    const filterList = countries.filter(country => country.name.common.toLowerCase().includes(inputText))
    setCountriesFilter(filterList)
  }



  const handleClick = (name) => {
    const filterCountry = countries.find(country => country.name.common === name)
    setCountriesFilter([filterCountry])
  }

  return (
    <div className="App">
      <div>find countries</div><input onChange={handleFilter}/>
      <CountriesList list={countriesFilter} handleClick={handleClick} />
    </div>
  );
}

export default App;
