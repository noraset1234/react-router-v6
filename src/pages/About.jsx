import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
        <p>This is the About</p>
        <Link to="/">Back to HomePage</Link>
        <br />
        <Link to ="/" state={"From About Page"}>back home page use state</Link>

    </div>
    
  )
}

export default About