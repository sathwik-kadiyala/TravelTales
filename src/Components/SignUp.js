import "../Styles/signup.css"
import { auth } from '../Config/Firebase'
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
export default function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  async function handleClick() {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setError(false)
      navigate('/login')
    }
    catch (err) {
      setError(true)
      console.log(err)
    }

  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={(e) => e.preventDefault()} >
        <label htmlFor="email">Email</label>
        <input id='email' className="registerInput" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email..." />
        <label htmlFor='password'>Password</label>
        <input id='password' autoComplete="on" className="registerInput" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password..." />
        {error && <span className="invalid"> Enter Valid Email or password.</span>}
        <button className="registerButton" onClick={handleClick}>Register</button>
      </form>
    </div>
  )
}