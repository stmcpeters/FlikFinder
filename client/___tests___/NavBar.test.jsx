import React from 'react'
import NavBar from 'client/src/components/NavBar.jsx'
import { render, screen } from '@testing-library/react'
// need to render the component in a router if using react-router-dom
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'


describe('NavBar component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    //screen.debug();    prints HTML structure of component
    expect(screen.getByText(/FlixFinder/i)).toBeInTheDocument();
  })
})

