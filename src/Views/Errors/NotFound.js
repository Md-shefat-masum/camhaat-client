import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <div className="error-wrapper">
                <div className="container">
                    <img src="/assets/images/sad.png" className="img-100" alt="" />
                    <div className="error-heading">
                        <img src="/assets/images/cloud-bg-1.png" className="cloud-first" alt="" />
                        <h2 className="headline font-danger">404</h2>
                        <img src="/assets/images/cloud-bg-2.png" className="cloud-second" alt="" />
                    </div>
                    <div className="col-md-8 offset-md-2">
                        <p className="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.
                        </p>
                    </div>
                    <div className="">
                        <Link to="/" className="btn btn-danger-gradien btn-lg">BACK TO HOME PAGE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
