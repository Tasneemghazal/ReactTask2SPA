import React from 'react'
import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import About from './components/about/About.jsx'
import PageNotFound from './components/pageNotFound/PageNotFound.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

