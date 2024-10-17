// toggleGenre() => adds or removes genres from the selectedGenres
// saveGenres() => saves the user’s selected genres to DB
import React from 'react'
import Select from 'react-select'

export default function SelectGenres() {

  // // populate options with genres in genres table
  const options = [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "animation", label: "Animation" },
    { value: "crime", label: "Crime" },
    { value: "documentary", label: "Documentary" },
    { value: "drama", label: "Drama" },
    { value: "family", label: "Family"},
    { value: "fantasy", label: "Fantasy" },
    { value: "history", label: "History" },
    { value: "horror", label: "Horror" },
    { value: "music", label: "Music" },
    { value: "mystery", label: "Mystery" },
    { value: "news", label: "News" },
    { value: "reality", label: "Reality" },
    { value: "romance", label: "Romance" },
    { value: "scifi", label: "Science Fiction" },
    { value: "talk", label: "Talk Show" },
    { value: "thriller", label: "Thriller" },
    { value: "war", label: "War" },
    { value: "western", label: "Western" }
  ]



  return (
    <>
      <h2>Select Genres</h2>
      <Select options={options} isMulti/>
    </>
  )
}
