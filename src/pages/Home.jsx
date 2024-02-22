import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
function Home({ login }) {
  let location = useLocation()
  let navigate = useNavigate()
  return (
    <div>
      <p>This is the Homepage</p>
      <button onClick={() => {
        login()
      }}>Login</button>
      {/* {location.state} */}
    </div>
  )
}
export default Home