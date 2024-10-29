import React from 'react'
import NavBar from 'client/src/components/NavBar.jsx'
import { render, screen, cleanup } from '@testing-library/react'
// need to render the component in a router if using react-router-dom
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

// makes sure each test is cleared after running
afterEach(() => {
  cleanup();
})

describe('NavBar component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    // screen.debug();    prints HTML structure of component
    // testing if Nav links display
    expect(screen.getByText(/FlixFinder/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/User Profile/i)).toBeInTheDocument();
    // testing if the commented out "Features" link is not present
    expect(screen.queryByText(/Features/i)).not.toBeInTheDocument();
  })
})

