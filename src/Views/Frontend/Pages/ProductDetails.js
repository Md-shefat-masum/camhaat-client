import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'
import { UseCommonData } from '../../../Hooks/UseCommonData'
import { UseAuth } from '../../../Hooks/UseAuth';
import axios from 'axios';

function ProductDetails() {
    let params = useParams();
    const [Product, setProduct] = useState({
        features: []
    });
    const [Loaded, setLoaded] = useState(true);
    const [TotalRating, setTotalRating] = useState({
        averageRating: 0,
        overallRating: 0,
        sumOfRating: 0,
        _1star: 0,
        _1starPercentage: 0,
        _2star: 0,
        _2starPercentage: 0,
        _3star: 0,
        _3starPercentage: 0,
        _4star: 0,
        _4starPercentage: 0,
        _5star: 0,
        _5starPercentage: 0,
    });
    const [RatingStar, setRatingStar] = useState([]);
    const [CartQty, setCartQty] = useState(1);
    const { cart_list, set_cart_list, set_favorite_list } = UseCommonData();
    const { user } = UseAuth();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/product/${params.product_id}`).then(res => res.json())
            .then(data => {
                let item = data;
                let total_ratings = calcualte_rating(item.ratings);
                // console.log(total_ratings);
                setTotalRating(total_ratings);
                setRatingStar(make_rating_star(total_ratings.averageRating));

                setProduct(item)
                setLoaded(true);
            })
    }, [setProduct]);


    const make_rating_star = (ratings) => {
        let temp_star = [];
        let star_count = 5;
        for (let index = 0; index < parseInt(ratings); index++) {
            temp_star.push(<i key={index + Math.random()} className="fa fa-star"></i>)
            star_count--;
        }
        if (ratings % parseInt(ratings) !== 0) {
            temp_star.push(<i key={Math.random()} className="fa fa-star-half-o"></i>)
            star_count--;
        }
        if (star_count < 5) {
            // console.log(ratings, star_count);
            for (let index = 0; index < star_count; index++) {
                temp_star.push(<i key={index + Math.random()} className="fa fa-star-o"></i>)
            }
        }

        return temp_star;
    }

    const calcualte_rating = (ratings) => {
        let _5star = ratings.filter(r => r.rating === 5).length;
        let _4star = ratings.filter(r => r.rating === 4).length;
        let _3star = ratings.filter(r => r.rating === 3).length;
        let _2star = ratings.filter(r => r.rating === 2).length;
        let _1star = ratings.filter(r => r.rating === 1).length;

        //Sum of individual star.
        let sumOfRating = parseInt(_5star + _4star + _3star + _2star + _1star);

        //Total number of rating
        let overallRating = parseInt(5 * _5star + 4 * _4star + 3 * _3star + 2 * _2star + 1 * _1star);

        //Average of all rating
        let averageRating = parseFloat(overallRating / sumOfRating);

        //Percentage of each star rating
        let _5starPercentage = parseInt((_5star / sumOfRating) * 100);
        let _4starPercentage = parseInt((_4star / sumOfRating) * 100);
        let _3starPercentage = parseInt((_3star / sumOfRating) * 100);
        let _2starPercentage = parseInt((_2star / sumOfRating) * 100);
        let _1starPercentage = parseInt((_1star / sumOfRating) * 100);

        return {
            sumOfRating,
            overallRating,
            averageRating,
            _5starPercentage,
            _4starPercentage,
            _3starPercentage,
            _2starPercentage,
            _1starPercentage,
            _5star,
            _4star,
            _3star,
            _2star,
            _1star,
        }
    }

    const qty_handler = (type, custom_qty = 0) => {
        if (type === 'inc') {
            setCartQty(custom_qty);
        }
        if (type === 'dec') {
            custom_qty > 1 && setCartQty(custom_qty);
        }
        if (type === 'custom' && custom_qty > 0) {
            setCartQty(custom_qty);
        }
        // console.log(CartQty, Product, custom_qty);
    }

    const save_to_cart = () => {
        let temp_product = { ...Product };
        temp_product.qty = CartQty;
        temp_product.email = user.email;
        temp_product.user_name = user.displayName;

        let temp_cart = [...cart_list].filter((item) => item._id !== temp_product._id);
        temp_cart.unshift(temp_product);
        set_cart_list(temp_cart)

        axios.post(`${process.env.REACT_APP_API_URL}/cart`, temp_product)
            .then(res => {
                console.log(res.data);
            })
        window.toaster('success', 'product added to cart list.');
    }

    const save_to_favorite = () => {
        let temp_product = { ...Product };
        let temp_cart = [...cart_list].filter((item) => item._id !== temp_product._id);
        temp_cart.unshift(temp_product);
        set_favorite_list(temp_cart)
        window.toaster('success', 'product added to fravorite list.');
    }

    const save_review = (e) => {
        e.preventDefault();
        let form_data = new FormData(e.target);
        form_data.append('user_id', user._id);
        form_data.append('user_name', user.displayName);
        form_data.append('user_details', JSON.stringify(user));
        form_data.append('product_id', Product._id);
        axios.post(`${process.env.REACT_APP_API_URL}/save-review/`, form_data)
            .then(res => {
                console.log(res.data);
                setProduct(res.data.product);
                e.target.reset();
                window.toaster('success', 'thanks for your review');
            })
    }


    const { name, image, price, features, description } = Product;
    return Loaded ? (
        <section>
            <div className="banner product_details">
                <div className="container d-flex flex-column justify-content-center h-100" style={{ background: 'rgba(0,0,0,.3)', backdropFilter: 'blur(3px)' }}>
                    <h2 className="page-title text-light mb-2">{"Product Details"}</h2>
                    <ul className="page-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>{name}</li>
                    </ul>
                </div>
            </div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <img src={`${process.env.REACT_APP_API_URL}/${image}`} className="w-100" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <div className="single-product-content">

                                    <div className="title-price">
                                        <h2 className="title">{name}</h2>
                                        <span className="price w-100 text-start mt-4">Price: ${price}</span>
                                    </div>

                                    <div className="ratting">
                                        <div className="inner">

                                            <span>
                                                {RatingStar.length && RatingStar}
                                            </span>
                                            <span>
                                                Ratings: ( {TotalRating.averageRating.toFixed(2)} )
                                            </span>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <h5>Specifications</h5>
                                        <ul>
                                            {
                                                features.map((item, index) => {
                                                    return <li key={index}><b>{item.name} :</b> {item.value}</li>
                                                })
                                            }

                                        </ul>
                                    </div>

                                    <div className="quantity">
                                        <h5>Quantity:</h5>
                                        <div className="pro-qty">
                                            <span onClick={() => qty_handler('dec', CartQty - 1)} className="dec qtybtn">-</span>
                                            <input type="text" onChange={(e) => qty_handler('custom', +e.target.value)} value={CartQty} />
                                            <span onClick={() => qty_handler('inc', CartQty + 1)} className="inc qtybtn">+</span>
                                        </div>
                                    </div>
                                    <h5 className="h-100 mt-3">Total: ${price * CartQty}</h5>
                                    <div className="action d-inline-flex flex-wrap">
                                        <a href="#/" onClick={() => { save_to_cart() }} className="action-btn action-cart"><i className="icon-shopping-cart d-inline-block"></i> Add to cart</a>
                                        <a href="#/" onClick={() => { save_to_favorite() }} className="action-btn action-wishlist"><i className="icon-heart d-inline-block"></i> Add to Favorite</a>
                                        <a href="#/" onClick={() => { qty_handler('custom', 1) }} className="action-btn action-compare"><i className="icon-reload d-inline-block"></i> Refresh</a>
                                    </div>

                                    <div className="desc pt-5">
                                        <h5>Description:</h5>
                                        {ReactHtmlParser(description)}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-body user_rating">
                                <span className="heading">User Rating</span> <span className="fas fa-star checked"></span><span className="fas fa-star checked"></span><span className="fas fa-star checked"></span> <span className="far fa-star"></span>
                                <span className="far fa-star"></span>
                                <p>3 average based on 1 reviews.</p>
                                <hr style={{ border: "3px solid rgb(241, 241, 241)" }} />
                                <div className="row">
                                    <div className="side"><div>5 star</div></div>
                                    <div className="middle">
                                        <div className="bar-container"><div className="bar-5" style={{ width: TotalRating._5starPercentage + "%" }}></div></div>
                                    </div>
                                    <div className="side right"><div>{TotalRating._5star}</div></div>

                                    <div className="side"><div>4 star</div></div>
                                    <div className="middle">
                                        <div className="bar-container"><div className="bar-4" style={{ width: TotalRating._4starPercentage + "%" }}></div></div>
                                    </div>
                                    <div className="side right"><div>{TotalRating._4star}</div></div>

                                    <div className="side"><div>3 star</div></div>
                                    <div className="middle">
                                        <div className="bar-container"><div className="bar-3" style={{ width: TotalRating._3starPercentage + "%" }}></div></div>
                                    </div>
                                    <div className="side right"><div>{TotalRating._3star}</div></div>

                                    <div className="side"><div>2 star</div></div>
                                    <div className="middle">
                                        <div className="bar-container"><div className="bar-2" style={{ width: TotalRating._2starPercentage + "%" }}></div></div>
                                    </div>
                                    <div className="side right"><div>{TotalRating._2star}</div></div>

                                    <div className="side"><div>1 star</div></div>
                                    <div className="middle">
                                        <div className="bar-container"><div className="bar-1" style={{ width: TotalRating._1starPercentage + "%" }}></div></div>
                                    </div>
                                    <div className="side right"><div>{TotalRating._1star}</div></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body comment_box">
                                <div className="card-box">
                                    <div className="wrapper">
                                        <div className="master">
                                            <h1>Add a review</h1>
                                            <div className="rating-component">
                                                <label htmlFor="review">Your Rating</label>
                                                <form action="" onSubmit={(e) => save_review(e)} id="product_comment_form">
                                                    <select name="rating" className="mt-3" id="">
                                                        <option value="5">5</option>
                                                        <option value="4">4</option>
                                                        <option value="3">3</option>
                                                        <option value="2">2</option>
                                                        <option value="1">1</option>
                                                    </select>
                                                    <div className="from-group mt-3">
                                                        <label htmlFor="review">Your review</label>
                                                        <textarea name="review" id="reveiw" className="form-control" style={{ height: "85px", width: 320 }}></textarea>
                                                    </div>
                                                    <div className="form-group mt-3">
                                                        <button className="btn btn-success">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body rating_list">
                        <div id="wrap">
                            <div className="container">
                                <div className="col-lg-12">
                                    <h3 className="review-title text-center">Customer Ratings</h3>
                                    <div className="review">
                                        <div >
                                            {
                                                Product?.ratings?.map((item) => {
                                                    return <div className="row" key={Math.random()}>
                                                        <div style={{ width: 120 }}>
                                                            <div className="review__head text-center">
                                                                <img src="https://unsplash.it/200" alt="" className="profile-img img-thumbnail center-block" />
                                                            </div>
                                                        </div>
                                                        <div style={{ width: "calc(100% - 136px)" }}>

                                                            <div className="review__body">
                                                                <span className="author-name">{item.user_name}</span>
                                                                <p>
                                                                    {item.review}
                                                                </p>
                                                            </div>


                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
        : ''
}

export default ProductDetails
