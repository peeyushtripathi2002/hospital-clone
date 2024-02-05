import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Header'
import Home from './Home'
import Services from './Services'
import About from './About'
import Doctors from './Doctors'
import Book from './Book'
import Review from './Review'
import Blogs from './Blogs'
function App() {
  return (
    <div>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='doctors' element={<Doctors/>}/>
      <Route path='book' element={<Book/>}/>
      <Route path='review' element={<Review/>}/>
      <Route path='blogs' element={<Blogs/>}/>
     </Routes>
    </div>
  )
}
export default App        