import './app.css'

import React, { useEffect, useState } from 'react'

const File = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    // Fetch data from the provided endpoint
    fetch('https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setFilteredData(data)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const handleInputChange = (event) => {
    const userInput = event.target.value

    setSearchQuery(userInput)

    // Filter data based on the search query
    const filteredResults = data.filter(
      (item) =>
        item.name.toLowerCase().includes(userInput.toLowerCase()) ||
        item.category.toLowerCase().includes(userInput.toLowerCase()) ||
        item.value.toString().includes(userInput),
    )

    setFilteredData(filteredResults)
  }

  const handleSearch = () => {
    console.log('Searching for:', searchQuery)
    console.log('Filtered Data:', filteredData)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Render the data received from the endpoint */}
      <ul className="list-container">
        {filteredData.map((item) => (
          <li key={item.id} className="list-item">
            <span>{item.name}</span> - <span>{item.category}</span> -{' '}
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default File
