import React from 'react'
import './Book.css'
import Jg from './image/images-book.jpg'
const Book = () => {
  return (
    <div>
        <section class="book" id="book">
                <h1 class="heading"><span>book</span> now</h1>
                <div class="row">
                    <div class="image">
                        <img src={Jg} />
                    </div>
                    <form action="">
                        <h3>book appointment</h3>
                        <input type="text" placeholder="your name" class="box" name="name" />
                        <input type="number" placeholder="your number" class="box" name="mobile"/>
                        <input type="email" placeholder="your email" class="box" name="email"/>
                        <input type="date" class="box" name="date"/>
                        <input type="submit" value="book now" class="btn" name="submit"/>
                    </form>
                </div>
            </section>
    </div>
  )
}

export default Book