import React from 'react'
import Nav from './components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import banner_veg from './components/assets/banner_veg.png'
import banner_fruit from './components/assets/banner_fruit.png'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/vegetables' element={<ShopCategory banner={banner_veg} category="vegetable" />} />
          <Route path='/fruits' element={<ShopCategory banner={banner_fruit} category="fruit" />} />
          <Route path='/grains' element={<ShopCategory banner={banner_fruit} category="grain" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App