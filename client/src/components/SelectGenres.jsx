import React, { useState, useEffect } from 'react'
import Select from 'react-select'

export default function SelectGenres({ getSelectedGenre, fetchRecommendation }) {
  // initializes values to update state of genres in drop down selection
  const [availableGenres, setAvailableGenres] = useState([]);
  // captures user selection of genre
  const [selectedOption, setSelectedOption] = useState(null);
  // sets and updates the selected genre the user chose
  const [selectedGenre, setSelectedGenre] = useState(null);

  //console.log(genres);

// toggleGenre() => adds or removes genres from the selectedGenres
  // post request to user-genre table to add favorite genres 
  // put request to user-genre table to edit favorite genres


// fetchGenres() => initial data fetch of available genres on page load
  // fetches genres from genre table and saves to availableGenre state
  // map over each genre to sort value and label (to populate select)

  useEffect(() => {

    const fetchGenres = async () => {
      try {
        // connecting to genres table in DB
        const response = await fetch('http://localhost:5001/db/genres');

        // error handling if cannot connect to DB
        if(!response.ok) throw new Error('Network response is not ok </3');

        // parse response data to json format
        const data = await response.json();
        // maps over data from genre table to fit select option element format
        const genreData = data.map(genre => ({
          value: genre.genre_id,
          label: genre.genre_name
        }))
        // sets genre data to availableGenres
        setAvailableGenres(genreData);
        // catches and displays errors fetching data
      } catch(error) {
        console.error('Error fetching genres: ', error);
      }
    }
// genres will be fetched on mount (aka page load)
    fetchGenres();
  }, []);

    // check if genre data from DB is getting fetched correctly
    // console.log(availableGenres);

// captures user genre choice and passes selected option into function to update state of genre selected 
const handleSelection = (selectedOption) => {
  setSelectedOption(selectedOption);
  setSelectedGenre(selectedOption);
  getSelectedGenre(selectedOption);
}

// passes selected option as a prop to call fetchRecommendation to fetch movies from API
// selects specifically the value to be input as genre in URL to fetch movies vs genre label
const handleGenerateMovie = () => {
  if(selectedOption){
    console.log('generating movie for genre: ', selectedOption.value);
    fetchRecommendation(selectedOption.value);
  }
}


  return (
    <>
      <div className="select-genre">
        <h2>What kind of mood are you in?</h2>
          <br />
        {/* populates options with genres from DB */}
        {/* displays options and handle changes */}
        <Select 
          className="selection" 
          options={availableGenres} 
          id="genres" 
          onChange={handleSelection} 
          value={selectedOption} />

        {/* button will save selected genres and fetch movies matching those genres */}
        <button type="button" onClick={handleGenerateMovie}>Generate Movie</button>
      </div>
    </>
  )
}
