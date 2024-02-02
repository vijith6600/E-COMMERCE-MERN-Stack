import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup =() => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className='loginsignup-field'>
                <input type="text"  placeholder="Your Name"/><br/>
                <input type="email" placeholder='Email Address'/>
                <input type="password" placeholder='Password' />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Alredy have an account? <span>Login here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>by continuing, i agree to the tearms of use  and privacy policy.</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup