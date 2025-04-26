import React, { useEffect, useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signUp } from '../../firebase'
import netfilx_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {
    const [signState,setSignState]=useState("Sign In")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loading,setLoading]=useState(false)

const user_auth= async(event)=>{
    event.preventDefault()
    setLoading(true)
    if(signState==="Sign In"){
        await login(email,password)
    }else{
        await signUp(name,email,password)
    }
    setLoading(false)
}


  return (
    loading ? <div className="login-spinner">
        <img src={netfilx_spinner} alt="" />
    </div>: 
    <div className='login'>
      <img src={logo} className='login-logo' alt="Netflix Logo" />

      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
        {signState === "Sign Up" ? <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your name' /> : <></>}
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>

        <div className="form-switch">
          {signState==="Sign In" ? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p> :
          <p>Already have an Account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>
}
        </div>
      </div>
    </div>
  )
}

export default Login
