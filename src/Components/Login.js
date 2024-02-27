import "../Styles/login.css";
import { auth } from '../Config/Firebase'
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Login({ user }) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  async function handleClick() {
    try {
      const user1 = await signInWithEmailAndPassword(auth, email, password)
      user(user1.user)
      setError(false)
      navigate('/')
    }
    catch (err) {
      setError(true)
      console.log(err)
    }

  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input id='email' className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email..." />
        <label htmlFor='password'>Password</label>
        <input id='password' autoComplete="on" className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password..." />
        {error && <span className="invalid"> Enter Valid Email or password.</span>}
        <button className="loginButton" onClick={handleClick}>Login</button>
      </form>
    </div>
  );
}