import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Home/cart/Cart'
import PlaceOrder from './pages/Home/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './Loginpopup/LoginPopup'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
  <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
  <div className='app'>

      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>}/>
        < Route path='/cart' element={<Cart/>}/>
        < Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
<Footer />
  </>
    
    
  )
}

export default App