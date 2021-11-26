import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { UseAuth } from '../../../Hooks/UseAuth';
import { UseCommonData } from '../../../Hooks/UseCommonData';

function Checkout() {
    const { cart_list, set_cart_list } = UseCommonData();
    const { user } = UseAuth();
    const palce_order_handler = (e) => {
        e.preventDefault();
        let form_data = new FormData(e.target);
        form_data.append('user_email', user.email);
        form_data.append('order_total', cart_list.reduce((t, i) => t += (i.price * i.qty), 0));
        // form_data.append('products',cart_list);
        axios.post(`${process.env.REACT_APP_API_URL}/order-create`, form_data)
            .then(res => {
                console.log(res.data);
                set_cart_list(res.data.cart_products);
                window.toaster('success', 'order created successfully');
            })
    }

    return (
        <div className="section">
            <div className="banner product_details">
                <div className="container d-flex flex-column justify-content-center h-100" style={{ background: 'rgba(0,0,0,.3)', backdropFilter: 'blur(3px)' }}>
                    <h2 className="page-title text-light mb-2">{"Cart List"}</h2>
                    <ul className="page-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>{'Carts list'}</li>
                    </ul>
                </div>
            </div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-12">

                        <form action="#/" onSubmit={(e) => { palce_order_handler(e) }} className="checkout-form">
                            <div className="row mbn-40">

                                <div className="col-lg-7 mb-40">

                                    <div id="billing-form" className="mb-10">
                                        <h4 className="checkout-title">Shipping Address</h4>

                                        <div className="row my-4">

                                            <div className="col-md-6 col-12 mb-4">
                                                <label>First Name*</label>
                                                <input type="text" defaultValue={user.first_name} name="first_name" placeholder="First Name" />
                                            </div>

                                            <div className="col-md-6 col-12 mb-4">
                                                <label>Last Name*</label>
                                                <input type="text" defaultValue={user.last_name} name="last_name" placeholder="Last Name" />
                                            </div>

                                            <div className="col-md-6 col-12 mb-4">
                                                <label>Email Address*</label>
                                                <input type="email" defaultValue={user.email} name="email" placeholder="Email Address" />
                                            </div>

                                            <div className="col-md-6 col-12 mb-4">
                                                <label>Phone no*</label>
                                                <input type="text" defaultValue={user.contact_number} name="contact_number" placeholder="Phone number" />
                                            </div>

                                            <div className="col-12 mb-4">
                                                <label>Company Name</label>
                                                <input type="text" name="company_name" placeholder="Company Name" />
                                            </div>

                                            <div className="col-12 mb-4">
                                                <label>Address*</label>
                                                <input type="text" name="address" placeholder="Address line 1" className="mb-15" />

                                            </div>

                                            <div className="col-md-6 col-12 mb-4">
                                                <label>Country*</label>
                                                <select name="country" defaultValue={user.country} className="form-control" >
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="china">China</option>
                                                    <option value="japan">Japan</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6 col-12 mb-4">
                                                <label>Town/City*</label>
                                                <input type="text" defaultValue={user.city} placeholder="Town/City" />
                                            </div>

                                            <div className="col-md-6 col-12 mb-4">
                                                <label>State*</label>
                                                <input type="text" defaultValue={user.state} placeholder="State" />
                                            </div>

                                            <div className="col-md-6 col-12 mb-4">
                                                <label>Zip Code*</label>
                                                <input type="text" defaultValue={user.zip_code} placeholder="Zip Code" />
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-5 mb-40">
                                    <div className="row">

                                        <div className="col-12 mb-4">

                                            <h4 className="checkout-title">Cart Total</h4>

                                            <div className="checkout-cart-total">

                                                <h4>Product <span>Total</span></h4>

                                                <ul>
                                                    {
                                                        cart_list.map(item => {
                                                            const { name, price, qty, discount } = item;
                                                            let final_price = price;
                                                            if (discount) {
                                                                final_price = (price - (price * discount / 100)).toFixed(2);
                                                            }
                                                            return <li key={item._id} className="d-flex justify-content-between w-100 align-items-center">
                                                                <div className="pe-4 d-flex justify-content-between align-items-center" style={{ flex: 1 }}>
                                                                    <div>{name}</div>
                                                                    <div className="px-3">
                                                                        X&nbsp;{qty}
                                                                    </div>
                                                                </div>
                                                                <div style={{ width: "20%", textAlign: 'right' }}>${final_price * qty}</div>
                                                            </li>
                                                        })
                                                    }
                                                </ul>

                                                <p>Sub Total <span>${cart_list.reduce((t, i) => t += (i.price * i.qty), 0)}</span></p>
                                                <p>Shipping Fee <span>$00.00</span></p>

                                                <h4>Grand Total <span>${cart_list.reduce((t, i) => t += (i.price * i.qty), 0)}</span></h4>

                                            </div>

                                        </div>

                                        <div className="col-12">
                                            {
                                                cart_list.length ?
                                                    <button className="btn-success btn">Place order</button>
                                                    :
                                                    <h3 className="text-danger">There is no product in cart</h3>
                                            }

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
