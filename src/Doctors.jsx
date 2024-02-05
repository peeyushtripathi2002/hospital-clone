import React from 'react'
import './Doctors.css'
import Dg from './image/images-1.jpg'
import Eg from './image/images-2.jpg'
import Fg from './image/images-3.jpg'
import Gg from './image/images-4.jpg'
import Hg from './image/images-5.jpg'
import Ig from './image/images-6.jpg'
const Doctors = () => {
  return (
    <div>
        <section class="doctors" id="doctors">
                <h1 class="heading">our <span>doctors</span></h1>
                <div class="box-container">
                    <div class="box">
                        <img src={Dg} />
                        <h3>dr. vivek tiwari</h3>
                        <span>Cardiologist expert</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={Eg} />
                        <h3>dr. neelesh mishra</h3>
                        <span>Oncologist expert</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={Fg} />
                        <h3>dr. anupam shayni</h3>
                        <span>Neurologist expert</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={Gg} />
                        <h3>dr. pradeep chauhan</h3>
                        <span>Orthopedic Surgeon expert</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={Hg} />
                        <h3>dr. ravi kumar</h3>
                        <span>Gastroenterologist expert</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div class="box">
                        <img src={Ig} />
                        <h3>dr. peeyush tripathi</h3>
                        <span>Ophthalmologist expert</span>
                        <div class="share">
                            <a href="" class="fab fa-facebook-f"></a>
                            <a href="" class="fab fa-twitter"></a>
                            <a href="" class="fab fa-instagram"></a>
                            <a href="" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Doctors