import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route,Routes } from 'react-router-dom';
import SinglePost from '../Components/SinglePost';
import '@testing-library/jest-dom'
test('renders SinglePost component', () => {
  const mockPostdata = [
    { id: 1, img: 'image-url.jpg', title: 'Test Post', author: 'Test Author', desc: 'Test description', email: 'test@example.com' }
  ];

  render(
    <MemoryRouter initialEntries={['/posts/1']}>
      <Routes>
        <Route path="/posts/:id" element={<SinglePost
          single={mockPostdata[0]}
          setSingle={() => {}}
          user={{ email: 'test@example.com' }}
          postdata={mockPostdata}
          setPostdata={() => {}}
          setUpdate={() => {}}
        />} />
      </Routes>
    </MemoryRouter>
  );

  // Check if single post information is rendered
  expect(screen.getByText('Test Post')).toBeInTheDocument();
  expect(screen.getByText('Author: Test Author')).toBeInTheDocument();
  expect(screen.getByText('Test description')).toBeInTheDocument();

  // Check if the update and remove icons are rendered for the author
  const updateIcon = screen.getByTestId('update-icon');
  const removeIcon = screen.getByTestId('remove-icon');
  expect(updateIcon).toBeInTheDocument();
  expect(removeIcon).toBeInTheDocument();

  // Simulate click events on update and remove icons
  fireEvent.click(updateIcon);
  fireEvent.click(removeIcon);

  // Add additional assertions as needed
});
