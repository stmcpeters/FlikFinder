// toggleGenre() => adds or removes genres from the selectedGenres
// saveGenres() => saves the user’s selected genres to DB
import React from 'react'
import Select from 'react-select'

export default function SelectGenres() {

  // populate options with genres in genres table
  const options = [
    { value: 'horror', label: 'Horror'},
    { value: 'thriller', label: 'Thriller'}
  ]



  return (
    <>
      <h2>Select Genres</h2>
      <Select options={options} isMulti/>
    </>
  )
}
