import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.css'
import ProductBody from '../components/ProductBody'

export default function Home() {
    const [Products, setProducts] = useState([])
    const [Reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products?limit=8`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
        fetch(`${process.env.REACT_APP_API_URL}/all-reviews?limit=8`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })

    }, [])
    return (
        <div>
            <section>
                <div className="container">
                    <div className="banner">
                        <div className="content">
                            <h1>Capture Your <br /> Beautiful Moments</h1>
                            <Link to="/products" className="btn btn-danger">Visit Shop</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* marketting */}
            <section className="py-5 my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/assets/images/ank2.jpg" alt="product add" className="img-fluid h-100" />
                        </div>
                        <div className="col-md-8">
                            <img src="/assets/images/ank1.jpg" alt="product add" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            {/* products */}
            <section className="py-5 my-3">
                <div className="container">
                    <h2>Products</h2>
                    <div className="row">
                        {
                            Products.map((item, index) => {
                                return index < 8 && <div className="col-md-3 mb-4" key={item._id}>
                                    <ProductBody product={item}></ProductBody>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>

            {/* news letter */}
            <section className="py-5 my-3">
                <div className="container">
                    <div className="banner news_letter">
                        <div className="content">
                            <h1>SUBSCRIBE OUR NEWSLETTER <br /> GET UPDATE FOR NEWS, OFFERS</h1>
                            <input type="text" className="form-control" placeholder="your email" />
                            <button className="btn btn-danger">
                                <i className="fa fa-paper-plane-o"></i> &nbsp; Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* review section */}
            <section className="py-5 my-3">
                <div className="container">
                    <h2>Customer Reviews</h2>
                    <div className="row">
                        <div className="customer-review">
                            <div className="row">
                                {
                                    Reviews.map(item => {

                                        return <div className="col-md-6" key={item._id}>
                                            <div className="card">
                                                <div className="d-flex mb-0 p-4">
                                                    <img className="align-self-start rounded-circle img-90" alt="Universal-review" src="/assets/images/user/12.png" />
                                                    <div>
                                                        <label className="cust-name">{item.user_name}</label>
                                                        <p>
                                                            {item.review}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 my-3">
                <div className="container">
                    <h2>Our Latest Blog</h2>
                    <div className="row">
                        <div className="customer-review">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/images/blog1.webp" className="w-100" />

                                            <h5 className="pt-3">Carefull About Photograpy</h5>
                                            <p>
                                                Over the last few years photo blogging has exploded in popularity.
                                                Therefore, there is tons of great content all over the web, especially when
                                                it comes to fashion blogs, travel blogs, and crowdsourced photo sites.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/images/blog2.jpg" className="w-100" />

                                            <h5 className="pt-3">How following photography</h5>
                                            <p>
                                                Get Inspiration from photo stories, interviews, and resource articles
                                                Improve your Skills with blog posts on photography techniques, software tips and tutorials
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/assets/images/blog3.jpg" className="w-100" />

                                            <h5 className="pt-3">Shutter Speed in Photography: The Essential Guide</h5>
                                            <p>
                                                What is shutter speed in photography, and how does it affect your images?

                                                Shutter speed is a foundational photographic concept – one that every beginner photographer must master. Once you know how to use shutter speed,
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
