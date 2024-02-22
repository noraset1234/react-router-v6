import React from 'react'

function Dashboard({logout}){
    return (
        <div>
            <h3>Dashboard</h3>
            <p>Welcome User</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard