import React from 'react'
import './Signupform.css'

const SignupForm = () => {
  return (
    <div className='signup-form'>
        <form>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
            <input type='mail' placeholder='e-mail'/>
            <input type='password' placeholder='Password'/>
            <input type='password' placeholder='Confirm Password'/>
            <button>SignUp</button>
            <button>Login</button>
            
        </form>

    </div>
  )
}

export default SignupForm