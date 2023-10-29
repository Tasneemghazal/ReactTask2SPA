import React from 'react'
import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

