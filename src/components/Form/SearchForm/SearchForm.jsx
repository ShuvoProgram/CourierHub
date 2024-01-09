/* eslint-disable react/prop-types */
import './SearchForm.css'

function SearchForm({placeholder}) {
  return (
    <div className="search">
    <input placeholder={`${placeholder}...`} type="text" />
    <button type="submit">Go</button>
  </div>
  )
}

export default SearchForm;