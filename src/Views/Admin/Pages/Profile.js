import React from 'react'
import { UseAuth } from '../../../Hooks/UseAuth'

function Profile() {
    let { user } = UseAuth();
    return (
        <div className="user-profile">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card hovercard text-center">
                        <div className="cardheader" style={{ height: 240 }}></div>
                        <div className="user-image">
                            <div className="avatar">
                                {
                                    user?.photoURL ?
                                        <img alt="profile" src={process.env.REACT_APP_API_URL+"/"+user.photoURL} />
                                        :
                                        <img alt="profile" src="../assets/images/user/11.png" />
                                }
                            </div>
                            <div className="icon-wrapper"><i className="icon-pencil"></i></div>
                        </div>
                        <div className="info">
                            <div className="row">
                                <div className="col-sm-6 col-lg-4 order-sm-1 order-xl-0">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="ttl-info text-start">
                                                <h6><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;Email</h6>
                                                <span>{user.email}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="ttl-info text-start">
                                                <h6><i className="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;BOD</h6>
                                                <span>02 January 1988</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 order-sm-0 order-xl-1">
                                    <div className="user-designation">
                                        <div className="title">
                                            <a target="_blank" href="#/">{user.displayName}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 order-sm-2 order-xl-2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="ttl-info text-start">
                                                <h6><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Contact Us</h6>
                                                <span>+880 8273847</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="ttl-info text-start">
                                                <h6><i className="fa fa-location-arrow"></i>&nbsp;&nbsp;&nbsp;Location</h6>
                                                <span>jatrabari</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <form action="" className="theme-form">
                                <div className="card-header">
                                    <h5>Update Information</h5>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">First Name</label>
                                        <div className="col-sm-9">
                                            <input type="email" className="form-control"  placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">Last Name</label>
                                        <div className="col-sm-9">
                                            <input type="email" className="form-control"  placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">Email</label>
                                        <div className="col-sm-9">
                                            <input type="email" className="form-control"  placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">Contact Number</label>
                                        <div className="col-sm-9">
                                            <input type="email" className="form-control"  placeholder="contact number" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">City</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"  placeholder="City" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">Zip Code</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"  placeholder="zip code" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label  className="col-sm-3 col-form-label">State</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control"  placeholder="State" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="inputPassword3" className="col-sm-3 col-form-label">Confirm Password</label>
                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
