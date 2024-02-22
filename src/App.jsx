import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//version เดิม switch v6 ใช้ routes
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
//Link NavLink Linkบอกสถานะปัจจุบันไม่ได้ แต่Navlinkบอกได้เช่นการใส่สี
//page
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'

function App() {
  // setlogin
  const [loggedIn, setloggedIn] = useState(null)

  function handleLogin() {
    setloggedIn(true)
  }
  function handleLogout() {
    setloggedIn(false)
  }
  console.log(loggedIn)

  let activeClassName = "nav-active"
  return (
    <BrowserRouter>
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        {/* ifถ้ามีการกดปุ่มก็จะต้องactive , แต่ก่อนต้องendที่home เพราะเป็นบัค หมือนเลือกabout homeจะมีสีค้างอยู่ตอนนี้แก้แล้ว*/}
        {/* ปุ่ม กำหนดpath*/}
        <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName : undefined}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : undefined}>Contact</NavLink>
        <NavLink to="/dashboard" >Dashboard</NavLink>
      </nav>
      {/* เชื่อมหน้า ไปยังที่เรากำหนดข้างบนให้แสดงออกมาตามหน้านั้น*/}
      <Routes>
        {/* thenaryoperator ถ้าlogin เป็นจริงไปdashboard ถ้าเท็จไปlogin */}
        <Route path="/" element={loggedIn ?<Navigate to="/dashboard" /> : <Home login={handleLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* ถ้ามีการล็อคอินจริงก็จะไปlogout ถ้าไม่จริงก็จะไปหน้าHome */}
        <Route path="/dashboard" element={loggedIn ? <Dashboard logout={handleLogout}/> : <Navigate to="/" state="From Dashboard" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
