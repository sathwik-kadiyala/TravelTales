import { Link } from 'react-router-dom'
import '../Styles/navbar.css'
import { auth } from '../Config/Firebase'
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import userimg from '../assets-images/user.jpg'

export default function Navbar({ userinfo, setuser }) {
  const [open, setOpen] = useState(false)
  // console.log(open)
  const user1=localStorage.getItem("user")
  const Logout = async () => {
    try {
      await signOut(auth);
      setuser(null);
      localStorage.removeItem("user");
      console.log("Signed out successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='navbar'>
      <div className='navleft'><Link className='let' to='/'>
        <p className='title'> <span className='letter'>T</span>ravel<span className='letter'>T</span>ales</p>
      </Link>
      </div>
      
      <div className={` ${open ? 'show' : 'navmiddle'}`}>
        <ul className='middlelinks'>
        {user1 &&
            <>
              <Link to='/' className='let middleitems'>HOME</Link>
              <Link to='/write' className=' let middleitems'>WRITE</Link>
              <Link to='/settings' className=' let middleitems'>
                {userinfo && userinfo.img ? (
                  <img className="topImg" src={userinfo.img} alt='' />
                ) : (
                  <img className="topImg" src={userimg} alt='' />
                )}
              </Link>
               
              <Link to='/login' onClick={Logout} className='let middleitems'>LOGOUT</Link>
              </>
           }
        </ul>
      </div>
     
      <div className={` ${open ? 'showr' : 'navright'}`}>
    
          <ul className='RightLinks'>
          
          
            {!user1 &&
              <>
              <Link to='/login' className=' let rightitems'>LOGIN</Link>
              <Link to='/signup' className=' let rightitems'>SIGN UP</Link>
              </>
            }
            
      
          </ul>
  
      </div>

      <div className='hams' >
        <button className='hambutton' onClick={() => setOpen(!open)}>
          <p className='hamline'>☰</p>
        </button>
      </div>
    </div>

  )
}
