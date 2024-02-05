import React from 'react'
import './Review.css'
import Kg from './image/images-rev1.jpg'
import Lg from './image/images-rev2.jpg'
import Mg from './image/images-rev3.jpg'
const Review = () => {
  return (
    <div>
        <section class="review" id="review">
                <h1 class="heading">client's <span>review</span></h1>
                <div class="box-container">
                    <div class="box">
                        <img src={Kg} />
                        <h3>peeyush tripathi</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Websites dedicated to healthcare reviews, such as Healthgrades or RateMDs, can provide a platform for patients to share their opinions about hospitals and healthcare providers.</p>
                    </div>
                    <div class="box">
                        <img src={Lg} />
                        <h3>sjeet yadav</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Some local community forums or discussion boards may have threads discussing the experiences of community members with healthcare facilities.</p>
                    </div>
                    <div class="box">
                        <img src={Mg} />
                        <h3>anuj yadav</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Check social media platforms like Facebook or Twitter. Hospitals and healthcare providers may have official pages where patients share their experiences.</p>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Review