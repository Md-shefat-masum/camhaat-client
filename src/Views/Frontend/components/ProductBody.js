import React from 'react'
import { Link } from 'react-router-dom'

function ProductBody(props) {
    const { _id, name, image, price, discount } = props.product;
    return (
        <div className="card h-100">
            <div className="product-box">
                <div className="product-img">
                    {
                        discount > 0 &&
                        <div className="ribbon ribbon-danger">-{discount}% off</div>
                    }

                    <div className="img">
                        <img src={`${process.env.REACT_APP_API_URL}/${image}`} className="p-4" style={{width:'100%'}} alt="" />
                    </div>
                    <div className="product-hover">
                        <ul>
                            <li className="me-3 p-0">
                                <Link to={"/product-details/"+_id} className="p-3 d-inline-block">
                                    <i className="icon-shopping-cart text-danger"></i>
                                </Link>
                            </li>
                            {/* <li><i className="icon-eye"></i></li> */}
                        </ul>
                    </div>
                </div>
                <div className="product-details">
                    <h6>{name}</h6>
                    <div className="product-price">
                        {
                            discount > 0 ?
                                <div>
                                    <del>
                                        ${price}
                                    </del>
                                    <span>
                                        ${(price - (price * discount / 100)).toFixed(2)}
                                    </span>
                                </div>
                                :
                                <span>
                                    ${price.toFixed(2)}
                                </span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBody
