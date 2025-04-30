import React from 'react'

// Import Common Components
import Navbar from '../../common/navbar/mainnavbar'
import Header from '../../common/Header/header'
import Footer from '../../common/footer'

// Import Images
import Blog1 from "../../assets/img/goatfeed/slide2.png"
import Blog2 from "../../assets/img/goatfeed/buffaloimg.png";
import Blog3 from "../../assets/img/goatfeed/dog.jpg"
import Blog4 from "../../assets/img/goatfeed/cattle-imgg.jpg";

const Blogs = () => {
    return (
        <>
            <Navbar />
            <div className='bg-white products'>
                <div className="pt-lg-4 -pt-2">
                    <Header title="Home" link="/" subtitle="Blogs" />
                </div>
                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6'>
                            <img src={Blog1} className='main-blog-img rounded-3' alt="Loading" />

                            <p className='mt-4 font-size-24 blog-heading'>Mutual Rescue: How Adopting a Homeless Pet or Shelter Dog Can Save Us</p>
                            <p className='blog-content font-size-14'>Ever heard about Mutual Rescue? It's an innovative concept that proves when we extend
                                our hearts to rescue animals, they rescue us right back! It's deeply
                                rooted in the symbiotic relationship between humans and animals—a relationship that is incredibly heartwarming...</p>
                        </div>
                        <div className='col-lg-6 d-felx justify-content-center align-items-center'>
                            <div className='row d-felx justify-content-center align-items-center'>
                                <div className='col-lg-4 col-md-4'>
                                    <img src={Blog2} className='blog-mini-img rounded-3' alt="Loading" />
                                    <a className='text-dark' href="https://www.animalhearted.com/blogs/animal-blog/89545350-cute-overload-24-hour-kitten-nursery#google_vignette"
                                        rel="noreferrer"
                                        target="_blank"
                                    >

                                        <p className='font-size-14 mt-4'>Cute Overload: The San Diego Humane Society Kitten Nursery</p>
                                    </a>
                                    <p className='font-size-10'>No one can resist the adorable charm of a kitten - their whimsical antics, tiny mews, and their astonishing capacity for both chaos
                                        and cuddles. Sadly, thousands of these furry miracles face abandonment each year. Thankfully, some organizations dedicate their...</p>
                                </div>
                                <div className='col-lg-4 col-md-4'>
                                    <img src={Blog3} className='blog-mini-img rounded-3' alt="Loading" />
                                    <p className='font-size-14 mt-4'>Cute Overload: The San Diego Humane Society Kitten Nursery</p>
                                    <p className='font-size-10'>No one can resist the adorable charm of a kitten - their whimsical antics, tiny mews, and their astonishing capacity for both chaos
                                        and cuddles. Sadly, thousands of these furry miracles face abandonment each year. Thankfully, some organizations dedicate their...</p>
                                </div>
                                <div className='col-lg-4 col-md-4'>
                                    <img src={Blog4} className='blog-mini-img rounded-3' alt="Loading" />
                                    <p className='font-size-14 mt-4'>Cute Overload: The San Diego Humane Society Kitten Nursery</p>
                                    <p className='font-size-10'>No one can resist the adorable charm of a kitten - their whimsical antics, tiny mews, and their astonishing capacity for both chaos
                                        and cuddles. Sadly, thousands of these furry miracles face abandonment each year. Thankfully, some organizations dedicate their...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer Section Start */}
            <Footer />
        </>
    )
}

export default Blogs;