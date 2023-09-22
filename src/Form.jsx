import { useState } from 'react'

const Form = ({ setInputSubmission }) => {
  const [searchInput, setSearchInput] = useState('')
  const [searchType, setSearchType] = useState('city')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    setInputSubmission({
      query: formData.get('search'),
      type: formData.get('search-type')
    })
    setSearchInput('')
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value)
  }

  return (
    <form
      className="join join-vertical w-full md:join-horizontal"
      onSubmit={handleFormSubmit}
    >
      <input
        className="input join-item input-bordered input-secondary md:flex-1"
        name="search"
        onChange={handleInputChange}
        placeholder="Enter city name"
        value={searchInput}
      />
      <select
        className="select join-item select-bordered select-secondary"
        name="search-type"
        onChange={handleSearchTypeChange}
        value={searchType}
      >
        <option value="city">City</option>
        <option value="zip">Zip Code</option>
      </select>
      <button className="btn btn-primary join-item">Search</button>
    </form>
  )
}

export default Form
