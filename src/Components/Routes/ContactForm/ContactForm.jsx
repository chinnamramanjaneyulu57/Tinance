import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    
    <div className='form-container'>
        <form>
            <input type='text' placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Subject'/>
            <textarea placeholder='Message' row='4'></textarea> 
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm