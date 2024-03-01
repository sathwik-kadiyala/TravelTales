import { render,screen,fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Settings from '../Components/Settings';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
test('submits form with updated user information', () => {
    const setUserInfoMock = jest.fn();
    render(<BrowserRouter><Settings setuserinfo={setUserInfoMock} /></BrowserRouter>);
    const nameInput = screen.getByPlaceholderText('Enter Username');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const aboutInput = screen.getByPlaceholderText('Tell the world about your world.....');
    fireEvent.change(aboutInput, { target: { value: 'Lorem ipsum dolor sit amet' } });

    const submitButton = screen.getByText('Update');
    fireEvent.click(submitButton);

    expect(setUserInfoMock).toHaveBeenCalledWith({
      img: '',
      author: 'John Doe',
      desc: 'Lorem ipsum dolor sit amet',
    });

    const image = screen.getByText('About yourself');
    expect(image).toBeInTheDocument();
  });