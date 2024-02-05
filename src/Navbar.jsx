import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <header class="header">
                <a href="#" class="logo"><i class="fas fa-heartbeat"></i>medcare.</a>
                <div className='Navbar'>
                    <span className='text'> <Link to='home'>Home</Link></span>
                    <span className='text'> <Link to='services'>Services</Link></span>
                    <span className='text'> <Link to='about'>About</Link></span>
                    <span className='text'> <Link to='doctors'>Doctors</Link></span>
                    <span className='text'> <Link to='book'>Book</Link></span>
                    <span className='text'> <Link to='review'>Review</Link></span>
                    <span className='text'> <Link to='blogs'>Blogs</Link></span>
                </div>
                <div id="menu-btn" class="fas fa-bars"></div>
            </header>
    </div>
  )
}

export default Navbar
