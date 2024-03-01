import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen ,fireEvent, configure} from '@testing-library/react'
import Navbar from '../Components/Navbar';
jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(),
}));
configure({testIdAttribute:"class"})
test("Navbar",()=>{
    const userinfo={}
    const setUser=[]
    render(
        <Router>
        <Navbar
        userinfo={userinfo}
        setuser={setUser}/>
        </Router>
    )
    const loginLink = screen.getByText('LOGIN');
    const signupLink = screen.getByText('SIGN UP');
    
    expect(loginLink).toBeInTheDocument();
    expect(signupLink).toBeInTheDocument();
    expect(document.querySelector(".navbar")).toBeInTheDocument()

    const button=screen.getByRole("button",{name:"☰"})
    expect(button).toBeInTheDocument()

    const middlelinks=document.querySelectorAll(".middlelinks")
    for(let i=0;i<middlelinks.length;i++){
        expect(middlelinks[i]).toBeInTheDocument()
    }

    
    
    const navMiddle = screen.getByTestId('navmiddle');
    const navRight = screen.getByTestId('navright');

    const hamburgerButton = screen.getByText('☰');
    fireEvent.click(hamburgerButton);
    expect(navMiddle).toHaveClass('show');
    expect(navRight).toHaveClass('showr');
    
    fireEvent.click(hamburgerButton);
    
    expect(navMiddle).not.toHaveClass('show');
    expect(navRight).not.toHaveClass('showr');
})

test('Navbar renders correctly when user is logged in', () => {
    const userinfo = { img: 'user-img-url', name: 'John Doe' };
  
    render(
      <Router>
        <Navbar userinfo={userinfo} setuser={() => {}} />
      </Router>
    );
  
    // Check if the logo/title is rendered
    expect(screen.getByText(/T?ravelT?ales/i)).toBeInTheDocument();
  
    // // Check if the Home, Write, and Logout links are rendered
    // expect(screen.getByText(/HOME/i)).toBeInTheDocument();
    // expect(screen.getByText(/WRITE/i)).toBeInTheDocument();
    // expect(screen.getByText(/LOGOUT/i)).toBeInTheDocument();
  
    // // Check if the user image is rendered
    // expect(screen.getByAltText('User Image')).toBeInTheDocument();
  });
  
  test('Navbar renders correctly when user is not logged in', () => {
    render(
      <Router>
        <Navbar userinfo={null} setuser={() => {}} />
      </Router>
    );
  
    // Check if the logo/title is rendered
    expect(screen.getByText(/T?ravelT?ales/i,)).toBeInTheDocument();
  
    // Check if the Login and Sign Up links are rendered
    expect(screen.getByText(/LOGIN/i)).toBeInTheDocument();
    expect(screen.getByText(/SIGN UP/i)).toBeInTheDocument();
  });
  
  test('Navbar toggles mobile menu', () => {
    render(
      <Router>
        <Navbar userinfo={null} setuser={() => {}} />
      </Router>
    );
  
    // Check if the mobile menu is initially hidden
    const navMiddle = screen.getByTestId('navmiddle');
    expect(navMiddle).toHaveClass('navmiddle');
  
    // Click on the hamburger button to open the mobile menu
    const hamburgerButton = screen.getByText('☰');
    fireEvent.click(hamburgerButton);
  
    // Check if the mobile menu is visible after clicking the hamburger button
    expect(navMiddle).toHaveClass('show');
  });