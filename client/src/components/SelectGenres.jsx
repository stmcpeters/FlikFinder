// toggleGenre() => adds or removes genres from the selectedGenres
// saveGenres() => saves the user’s selected genres to DB
import React, { useState, useEffect } from 'react'
import Select from 'react-select'

export default function SelectGenres({ genres }) {

  const [selectedGenres, setSelectedGenres] = useState([]);

  //console.log(genres);


  // const handleGenreSelect = (genres) => {
  //   setSelectedGenres(genres);
  // }
  // const loadGenres = () => {
  //   fetch("http://localhost:5001/db/genres")
  //     .then((response) => response.json())
  //     .then((genres) => {
  //       setSelectedGenres(genres);
  //     })
  // }

  // useEffect(() => {
  //   loadGenres();
  // }, []);

  // populate options with genres in genres table
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
      <h2>What kind of mood are you in?</h2>
      <div className="select-genre">
        {/* tries to populate select with genres from DB - shows as undefined */}
      {/* <select multiple={true} onChange={(event) => setSelectedGenres(event.target.value)}>
                {genres.map((genre) => (
                    <option key={genre.genre_id} value={genre.genre_name}>{genre.genre_name}</option> 
                ))}
            </select> */}

        {/* uses hardcoded genre options */}
        <Select options={options} isMulti/>

        {/* button will save selected genres and fetch movies matching those genres */}
        <button type="button">Generate Movie</button>
      </div>
    </>
  )
}
