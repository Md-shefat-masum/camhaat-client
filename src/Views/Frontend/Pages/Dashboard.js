import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
    const [PathLocation, setPathLocation] = useState('')
    useEffect(() => {
        let path = window.location.pathname;
        setPathLocation(path);
        // console.log(path);
    }, [window.location.pathname])
    return (
        <div>
            <div className="banner product_details">
                <div className="container d-flex flex-column justify-content-center h-100" style={{ background: 'rgba(0,0,0,.3)', backdropFilter: 'blur(3px)' }}>
                    <h2 className="page-title text-light mb-2">{"My Account"}</h2>
                    <ul className="page-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>{'profile'}</li>
                    </ul>
                </div>
            </div>
            <div className="container user_profile py-5 my-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="myaccount-tab-menu nav">
                            <Link to="/auth/profile" className={PathLocation === '/auth/profile'?"active":''}>
                                <i className="fa fa-dashboard"></i>
                                Dashboard
                            </Link>
                            <Link to="/auth/profile/orders" className={PathLocation === '/auth/profile/orders'?"active":''}>
                                <i className="fa fa-cart-arrow-down"></i>
                                Orders
                            </Link>

                            <Link to="/auth/profile/account-details" className={PathLocation === '/auth/profile/account-details'?"active":''}>
                                <i className="fa fa-user"></i>
                                Account Details
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="myaccount-content">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
