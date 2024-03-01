import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react';
import Private from '../Components/Private';
import { MemoryRouter } from 'react-router-dom';

describe('Private component', () => {
  it('renders Outlet when user is present', () => {
    // Simulate user being present in localStorage

 render(
      <MemoryRouter>
        <Private />
      </MemoryRouter>
    );

  });


});

