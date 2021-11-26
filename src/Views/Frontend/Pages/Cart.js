import React from 'react'
import { Link } from 'react-router-dom'
import { UseCommonData } from '../../../Hooks/UseCommonData';

function Cart() {
    const { cart_list, cart_page_qty_handler, remove_form_cart } = UseCommonData();
    return (
        <section>
            <div className="banner product_details">
                <div className="container d-flex flex-column justify-content-center h-100" style={{ background: 'rgba(0,0,0,.3)', backdropFilter: 'blur(3px)' }}>
                    <h2 className="page-title text-light mb-2">{"Cart List"}</h2>
                    <ul className="page-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>{'Carts list'}</li>
                    </ul>
                </div>
            </div>

            <section className="my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <form action="#/">
                                <div className="cart-table table-responsive mb-30">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart_list.map(item => {
                                                    const { _id, name, image, price, qty, discount } = item;
                                                    let final_price = price;
                                                    if (discount) {
                                                        final_price = (price - (price * discount / 100)).toFixed(2);
                                                    }
                                                    return <tr key={_id}>
                                                        <td>
                                                            <a href="single-product.html">
                                                                <img src={`${process.env.REACT_APP_API_URL}/${image}`} style={{ width: "50px" }} alt="Product" />
                                                            </a>
                                                        </td>
                                                        <td style={{ width: 130 }}><a href="#/">{name}</a></td>
                                                        <td>
                                                            {
                                                                discount > 0 ?
                                                                    <div>
                                                                        <del>
                                                                            ${price}
                                                                        </del>
                                                                        <span className="d-inline-block ms-2">
                                                                            ${final_price}
                                                                        </span>
                                                                    </div>
                                                                    :
                                                                    <span className="d-inline-block">
                                                                        ${final_price.toFixed(2)}
                                                                    </span>
                                                            }
                                                        </td>
                                                        <td>
                                                            <div className="pro-qty">
                                                                <span className="dec qtybtn" onClick={() => { cart_page_qty_handler(item, 'dec') }}>-</span>
                                                                <input type="text" onChange={(e) => { cart_page_qty_handler(item, 'custom', +e.target.value) }} value={item.qty} />
                                                                <span className="inc qtybtn" onClick={() => { cart_page_qty_handler(item, 'inc') }}>+</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>$ {final_price * qty}</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <a onClick={() => { remove_form_cart(item) }} href="#/">
                                                                <i className="fa fa-trash-o"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                            <div className="row my-4">

                                <div className="col-lg-6 col-12 mb-40">

                                </div>
                                <div className="col-lg-6 col-12 mb-40">
                                    <div className="cart-summary">
                                        <div className="cart-summary-wrap">
                                            <h4>Cart Summary</h4>
                                            <p>Sub Total <span>${cart_list.reduce((t,i)=>t+=(i.price*i.qty),0)}</span></p>
                                            <p>Shipping Cost <span>$00.00</span></p>
                                            <h5>Grand Total <span>${cart_list.reduce((t,i)=>t+=(i.price*i.qty),0)}</span></h5>
                                        </div>
                                        <div className="cart-summary-button">
                                            <Link to="/auth/checkout" className="btn btn-info">Checkout</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Cart
