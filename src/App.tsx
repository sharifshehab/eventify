import { Outlet } from 'react-router'
import './App.css'
import Navbar from './pages/shared/Navbar'
import Footer from './pages/shared/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
