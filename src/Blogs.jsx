import React from 'react'
import './Blogs.css'
import Ng from './image/blog1.jpg'
import Og from './image/blog2.jpg'
import Pg from './image/blog3.jpg'
const Blogs = () => {
  return (
    <div>
        <section class="blogs" id="blogs">
                <h1 class="heading">our<span> blogs</span></h1>
                <div class="box-container">
                    <div class="box">
                        <div class="image">
                            <img src={Ng} />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"><i class="fas fa-calender">1st may ,2023</i></a>
                                <a href="#"><i class="fas fa-user"></i>by admin</a>
                            </div>
                            <h3>heart cardiology blog</h3>
                            <p>If you're looking for information on a specific cardiology blog, I recommend using a search engine to find the most recent and relevant results. You can enter the blog's name directly into a search engine to locate its official website
                                or other sources that provide details about the blog, its authors, and the topics it covers. </p>
                            <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src={Og} />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"><i class="fas fa-calender">1st may ,2023</i></a>
                                <a href="#"><i class="fas fa-user"></i>by admin</a>
                            </div>
                            <h3>bed faicility blog</h3>
                            <p>I recommend using a search engine to look for the most recent and relevant information. You can enter the blog's name directly into a search engine to find its official website or other sources that provide details about the blog,
                                its authors, and the topics it covers. </p>
                            <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src={Pg} />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"><i class="fas fa-calender">1st may ,2023</i></a>
                                <a href="#"><i class="fas fa-user"></i>by admin</a>
                            </div>
                            <h3> account section blog</h3>
                            <p>As of my last knowledge update in January 2022, I don't have specific information about a blog named "Account Section Blog." It's possible that the blog is relatively new, not widely recognized, or that it was created after my last
                                update. </p>
                            <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="footer">
                <div class="box-container">
                    <div class="box">
                        <h3>quick links</h3>
                        <a href="#"><i class="fas fa-chevron-right"></i>Home</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>Services</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>About</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>Doctors</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>Book</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>Review</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>Blogs</a>
                    </div>
                    <div class="box">
                        <h3>our services</h3>
                        <a href="#"><i class="fas fa-chevron-right"></i>dental care</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>message therapy</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>cardioloty</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>diagnosis</a>
                        <a href="#"><i class="fas fa-chevron-right"></i>ambulance services</a>
                    </div>
                    <div class="box">
                        <h3>contact info</h3>
                        <a href="#"><i class="fas fa-phone"></i>+123-456-7890</a>
                        <a href="#"><i class="fas fa-phone"></i>+111-222-3333</a>
                        <a href="#"><i class="fas fa-envelope"></i>peeyush2002@gmail.com</a>
                        <a href="#"><i class="fas fa-envelope"></i>priya2003@gmail.custom</a>
                        <a href="#"><i class="fas fa-map-marker-alt"></i>Bhopal,India-402022</a>
                    </div>
                    <div class="box">
                        <h3>follow us</h3>
                        <a href="#"><i class="fas fa-facebook"></i>facebook</a>
                        <a href="#"><i class="fas fa-twitter"></i>twitter</a>
                        <a href="#"><i class="fas fa-instagram"></i>instagram</a>
                        <a href="#"><i class="fas fa-linkedin"></i>fa-linkedin</a>
                        <a href="#"><i class="fas fa-map-whatsApp"></i>whatsApp</a>
                    </div>
                </div>
                <div class="credit">Created By <span>Mr. Peeyush Tripathi Web Designer</span> All Rights Reserved</div>
            </section>
    </div>
  )
}

export default Blogs