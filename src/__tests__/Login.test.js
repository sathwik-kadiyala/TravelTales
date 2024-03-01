import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen ,fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event/';
import Login from '../Components/Login'

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(), 
}));

test('Login  component ', () => {
    const user = {}
    render(<Router>
        <Login user={user} />
    </Router>)
    const input1=screen.getByPlaceholderText("Enter your email...")
    expect(input1).toBeInTheDocument()

    const input2=screen.getByPlaceholderText("Enter your password...")
    expect(input2).toBeInTheDocument()

    const ele=screen.getAllByText("Login")
    for(let i=0;i<ele.length;i++){
        expect(ele[i]).toBeInTheDocument()
    }
    
   expect(screen.getByLabelText("Email")).toBeInTheDocument()
   expect(screen.getByLabelText("Password")).toBeInTheDocument()

   const email = 'test@example.com';
   const password = 'wrongpassword';

   const submitButton = screen.getByRole('button', { name: 'Login' });
   
   fireEvent.change(input1, { target: { value: email } });
   fireEvent.change(input2, { target: { value: password } });
   fireEvent.click(submitButton);

   expect(document.querySelector(".loginForm")).toBeInTheDocument()


}
)

test('Login form submission', async () => {
    const mockUser = {
      uid: 'testUid',
    };
    const signInWithEmailAndPassword= jest.fn();
    signInWithEmailAndPassword.mockResolvedValueOnce({ user: mockUser });
  
    render(<Router>
        <Login />
        </Router>);
  
    userEvent.type(screen.getByPlaceholderText('Enter your email...'), 'test@example.com');
    userEvent.type(screen.getByPlaceholderText('Enter your password...'), 'testPassword');
  
    
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
  
       
    // expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
    //     expect.any(Object), 
    //     'test@example.com',
    //     'testPassword'
    //   );
    const logins=await screen.findAllByText('Login');
    for(let i=0;i<logins.length;i++){
        expect(logins[i]).toBeInTheDocument()
    }
  

  
    
    // expect(localStorage.getItem('user')).toBe('testUid');
  
    
    expect(window.location.pathname).toBe('/');
  });
