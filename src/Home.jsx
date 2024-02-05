import React from 'react'
import './Home.css'
import Bg from './image/hospital.jpg'
const Home = () => {
  return (
    <div>
        <section class="home" id="home">
                <div class="image">
                    <img src={Bg} />
                </div>
                <div class="content">
                    <h3>Best Super Speciality Hospital</h3>
                    <p> 1352, Home Science College Rd, near Ashish Hospital, Napier Town, Jabalpur, Madhya Pradesh 482001</p>
                    <a href="#" class="btn">contact us<span class="fas fa-chevron-right"></span></a>
                </div>
            </section>
            <section class="icons-container">
                <div class="icons">
                    <i class="fas fa-user-md"></i>
                    <h3>140+</h3>
                    <p>doctors at work</p>
                </div>
                <div class="icons">
                    <i class="fas fa-users"></i>
                    <h3>1040+</h3>
                    <p>satisfied patients</p>
                </div>
                <div class="icons">
                    <i class="fas fa-procedures"></i>
                    <h3>500+</h3>
                    <p>bed facility</p>
                </div>
                <div class="icons">
                    <i class="fas fa-hospital"></i>
                    <h3>80+</h3>
                    <p>available hospitals</p>
                </div>
            </section>
    </div>
  )
}

export default Home