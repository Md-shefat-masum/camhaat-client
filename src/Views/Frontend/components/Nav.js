import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UseAuth } from '../../../Hooks/UseAuth'
import { UseCommonData } from '../../../Hooks/UseCommonData';

function Nav() {
    let { log_out, user } = UseAuth();
    const [ShowLogoutModal, setShowLogoutModal] = useState(false);
    const [showNav, setshowNav] = useState(true);
    const { cart_list } = UseCommonData();

    useEffect(() => {
        window.innerWidth < 768 && setshowNav(false)
    }, [])
    const handle_logout = () => {
        log_out();
        setShowLogoutModal(!ShowLogoutModal);
    }


    return (
        <header className="p-0 m-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand order-1" to="/">CamHaat</Link>
                    <button onClick={()=>{setshowNav(!showNav)}} className="navbar-toggler order-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-align-right"></span>
                    </button>
                    <div className={`collapse navbar-collapse order-sm-3 order-3 ${ showNav && " show_nav_toggle "}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            {
                                user.role === 'admin' &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Admin-Dashboard</Link>
                                </li>
                            }
                        </ul>
                    </div>
                    <div className="order-2 order-lg-4 auth_nav">
                        <ul>
                            {
                                user?.email &&
                                <li>
                                    <Link to="/auth/carts">
                                        <i className="fa fa-shopping-cart"></i>
                                        ${cart_list.reduce((t, i) => t += (i.price * i.qty), 0)} ({cart_list.reduce((t, i) => t += (i.qty), 0)} items)
                                    </Link>
                                </li>
                            }
                            {
                                user?.email ?

                                    <li>

                                        <Link to="/auth/profile">
                                            Profile &nbsp;
                                            {
                                                user.photoURL ?
                                                    <img src={process.env.REACT_APP_API_URL + '/' + user.photoURL} style={{ width: 40, height: 40, borderRadius: 50 }} alt="" />
                                                    :
                                                    <img src="/assets/images/user/user.png" alt="" />
                                            }
                                        </Link>
                                        <ul>
                                            <li>
                                                <h6>{user.displayName}</h6>
                                            </li>
                                            <li>
                                                <Link to="/auth/profile">
                                                    <i className="fa fa-dashboard"></i>
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/auth/carts">
                                                    <i className="fa fa-shopping-basket"></i>
                                                    Cart
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/auth/checkout">
                                                    <i className="icon-shopping-cart-full"></i>
                                                    Checkout
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#/" onClick={() => { setShowLogoutModal(!ShowLogoutModal) }}>
                                                    <i className="fa fa-sign-out"></i>
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    :
                                    <li>
                                        <Link to="signin">Login</Link>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
            <div className={"modal fade " + (ShowLogoutModal ? 'show' : '')} id="staticBackdrop"
                data-bs-backdrop="static" data-bs-keyboard="false"
                tabIndex="-1" aria-labelledby="staticBackdropLabel"
                style={{ display: ShowLogoutModal && 'block', backdropFilter: 'blur(3px)' }}
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">! Confirm Logout</h5>
                            <button type="button" className="btn-close" onClick={() => setShowLogoutModal(!ShowLogoutModal)} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="card-body">
                                    <h4>
                                        Sure want to logout!!
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={() => handle_logout()} className="btn btn-secondary" data-bs-dismiss="modal">Logout</button>
                            {/* <button type="button" className="btn btn-primary">Procced</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav
