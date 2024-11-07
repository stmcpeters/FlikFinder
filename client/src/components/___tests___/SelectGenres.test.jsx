import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import SelectGenres from '../SelectGenres'
import '@testing-library/jest-dom'

// mocking fetch function using jest.fn()
// creates fake genre data to simulate an API call
global.fetch = jest.fn(() => 
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { genre_id: 'action', genre_name: 'Action'}, 
      { genre_id: 'adventure', genre_name: 'Adventure' }])
  })
)

describe('SelectGenres component', () => {
  // clears mocks before running the next one
  afterEach(() => {
    jest.clearAllMocks();
  })

  test('renders component without crashing', () => {
    // passes the needed props to the SelectGenres component
    render(<SelectGenres getSelectedGenre={() => {}} fetchRecommendation={() => {}} />);
    // selects the heading text displayed in this component using a full string match
    const header = screen.getByText('What kind of mood are you in?');
    // we expect the heading to be in the doc
    expect(header).toBeInTheDocument();
  })

  test('renders the Generate Movie button correctly', () => {
    render(<SelectGenres />)
    //screen.debug();
    // grabs button using text - full string match
    const generateButton = screen.getByText('Generate Movie');
    // expect the button to be on the page
    expect(generateButton).toBeInTheDocument();
  })

  // make sure genres are populated in dropdown
  // simulate user selecting a genre from dropdown
  // make sure clicking button calls fetchRecommendation()
})