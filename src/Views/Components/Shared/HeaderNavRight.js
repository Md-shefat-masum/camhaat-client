import React from 'react'
import { UseCommonData } from '../../../Hooks/UseCommonData';
import HeaderUser from './HeaderUser'

function HeaderNavRight() {
    const {show_header_nav_bar,set_header_show_nav_bar} = UseCommonData();
    return (
        <div className="nav-right col">
            <ul className={`nav-menus ` + (show_header_nav_bar ? `open` : ``)}>

                {/* <li className="onhover-dropdown">
                            <a href="#!" className="txt-dark">
                                <img className="align-self-center pull-right me-2" src="../assets/images/dashboard/notification.png" alt="header-notification"></img>
                                <span className="badge rounded-pill badge-primary notification">3</span>
                            </a>
                            <ul className="notification-dropdown onhover-show-div">
                                <li>Notification <span className="badge rounded-pill badge-secondary text-white text-uppercase pull-right">3 New</span></li>
                                <li>
                                    <div className="d-flex">
                                        <i className="flex-shrink-0 align-self-center notification-icon icofont icofont-shopping-cart bg-primary"></i>
                                        <div>
                                            <h6 className="mt-0">Your order ready for Ship..!</h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                            <span><i className="icofont icofont-clock-time p-r-5"></i>Just Now</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <i className="flex-shrink-0 align-self-center notification-icon icofont icofont-download-alt bg-success"></i>
                                        <div>
                                            <h6 className="mt-0 txt-success">Download Complete</h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                            <span><i className="icofont icofont-clock-time p-r-5"></i>5 minutes ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <i className="flex-shrink-0 align-self-center notification-icon icofont icofont-recycle bg-danger"></i>
                                        <div>
                                            <h6 className="mt-0 txt-danger">250 MB trush files</h6>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                            <span><i className="icofont icofont-clock-time p-r-5"></i>25 minutes ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="text-center">You have Check <a href="#/">all</a> notification  </li>
                            </ul>
                        </li> */}

                <li className="onhover-dropdown">
                    <HeaderUser></HeaderUser>
                </li>
            </ul>
            <div className="d-lg-none mobile-toggle">
                <i onClick={() => set_header_show_nav_bar(!show_header_nav_bar)} className="icon-more"></i>
            </div>
        </div>
    )
}

export default HeaderNavRight
