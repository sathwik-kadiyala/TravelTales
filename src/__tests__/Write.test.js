import Write from "../Components/Write";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'


test('Write component form submission', () => {
    const setUpdate = jest.fn();
    const setpostdata = jest.fn();
    const navigate = jest.fn();
    const userinfo = { author: 'testuser' };
    const user = { email: 'test@example.com' };
    const postdata = [];
  
    render(<BrowserRouter>
      <Write
        update={false}
        setUpdate={setUpdate}
        single={null}
        userinfo={userinfo}
        user={user}
        postdata={postdata}
        setpostdata={setpostdata}
      />
      </BrowserRouter>
    );
  
    // Fill form inputs
    userEvent.type(screen.getByPlaceholderText('Title'), 'Test Title');
    userEvent.type(screen.getByPlaceholderText('Tell your story...'), 'Test Description');
  
    // Trigger form submission
    fireEvent.submit(screen.getByRole('button', { name: 'Post' }));
  
expect(screen.getByPlaceholderText("Title")).toBeInTheDocument()
  });