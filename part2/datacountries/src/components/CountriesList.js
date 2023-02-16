import React from 'react'

function CountriesList({list, handleClick}) {
  if(list.length > 10){
    return <p>Too many matches, specify another filter</p>
  } else if (list.length === 1){
  return (
    <>
      <h2>{list[0].name.common}</h2>
      <p>capital {list[0].capital}</p>
      <p>area {list[0].area}</p>
      <h4>languages:</h4>
      <ul>
        {Object.keys(list[0].languages).map(language => {
         return <li key={language}>{list[0].languages[language]}</li>
        })}
      </ul>
      <img alt={list[0].flags.png} src={list[0].flags.png} />
    </>
    )
  } else {
    return(
      list.map(country => {
        return <div key={country.name.official}>{country.name.common}<button onClick={() => handleClick(country.name.common)}>show</button></div>
      })
    )
  }
}

export default CountriesList;
