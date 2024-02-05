import React from 'react'
import './About.css'
import Cg from './image/about.jpg'
const About = () => {
  return (
    <div>
        <section class="about" id="about">
    <h1 class="heading"><span>about</span> us</h1>
    <div class="row">
        <div class="image">
            <img src={Cg} />
        </div>
        <div class="content">
            <h1>We take care of your healthy life</h1>
            <p>Facilities and Services: Overview of the hospital's facilities, including the number of beds, specialized units (e.g., emergency care, maternity, surgical), and the range of medical services provided.</p>
            <p> Accreditations and Certifications: Highlights of the hospital's accreditations, certifications, and affiliations with relevant healthcare organizations, indicating compliance with quality and safety standards.</p>
            <a href="#" class="btn">learn more<span class="fas fa-chevron-right"></span></a>
        </div>
    </div>
</section>
</div>
  )
}

export default About