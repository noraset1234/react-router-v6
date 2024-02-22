import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Contact() {

    // let navigate=useNavigate()
    const navigate = useNavigate();
  return (
    <div>
        <p>This is the Contact Page</p>
        <button onClick={() => navigate("/",{state :"from Contact"})}>Redirect</button>
    </div>
  )
}

export default Contact