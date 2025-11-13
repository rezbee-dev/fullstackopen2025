import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Country from './Country'
import Countries from './Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
        setCountries(response.data)
      } catch (err) {
        console.error(`Error: ${err}`)
      }
    }

    fetchData()
  }, [])

  function displayCountries() {
    if(filter == "")
      return countries.map((c, i) => <p key={i}>{c.name.common}</p>)
    
    const matching = countries.filter(c => c.name.common.toLowerCase().startsWith(filter.toLowerCase()))

    if(matching.length == 0)
      return <p>No results found.</p>
    else if(matching.length > 10)
      return <p>Too many matches, specify your search.</p>
    else if(matching.length <= 10 && matching.length > 1)
      return (
        <div>
          <Countries countries={matching} />
        </div>
      )  
    else
      return <Country data={matching[0]} />
  }

  return (
    <main>
      <section>
        <label>Find countries: <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} /></label>
      </section>
      <section>
        {displayCountries()}
      </section>
    </main>
  )
}

export default App
