import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

function Frontend() {
    return (
        <section className="front_section">

            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

            <Nav></Nav>

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <main>
                <Outlet />
                {/* footer */}
                <footer>
                    <div className="container">
                        <div className="footer-section">

                            <div className="footer-top">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-12 mb-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget-title">About us</h4>
                                            <div className="footer-widget-text">
                                                <p>The new hero pieces bring instant fashion credibility. Bright florals clash with camouflage prints.</p>
                                            </div>
                                        </div>
                                        <div className="footer-widget mt-4">
                                            <h4 className="footer-widget-title">Follow us</h4>
                                            <div className="footer-widget-socail">
                                                <Link to="#/"><i className="fa fa-facebook"></i></Link>
                                                <Link to="#/"><i className="fa fa-twitter"></i></Link>
                                                <Link to="#/"><i className="fa fa-rss"></i></Link>
                                                <Link to="#/"><i className="fa fa-google-plus"></i></Link>
                                                <Link to="#/"><i className="fa fa-linkedin"></i></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-12 mb-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget-title">Information</h4>
                                            <ul className="footer-widget-link">
                                                <li><Link to="#/">About Us</Link></li>
                                                <li><Link to="#/">Services</Link></li>
                                                <li><Link to="#/">Delivary Information</Link></li>
                                                <li><Link to="#/">Privacy Policy</Link></li>
                                                <li><Link to="#/">Terms &amp; Conditions</Link></li>
                                                <li><Link to="#/">Return Policy</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-12 mb-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget-title">My Account</h4>
                                            <ul className="footer-widget-link">
                                                <li><Link to="#/">My Account</Link></li>
                                                <li><Link to="#/">Cart</Link></li>
                                                <li><Link to="#/">Checkout</Link></li>
                                                <li><Link to="#/">Contact</Link></li>
                                                <li><Link to="#/">Validation</Link></li>
                                                <li><Link to="#/">Wishlist</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-12 mb-">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget-title">Get In Touch</h4>
                                            <div className="footer-widget-text mb-2">
                                                <p><i className="fa fa-home"></i> Dania-3, Sonirakhra, dhaka.</p>
                                                <p><i className="fa fa-phone"></i> +880 13456677</p>
                                                <p><i className="fa fa-envelope"></i> <Link to="mailto:info@camhaat.com">info@camhaat.com</Link></p>
                                                <p><i className="fa fa-fax"></i> +880 13456677</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="footer-bottom">
                                <div className="row">
                                    <div className="copyright col-12">
                                        <p>Copyright © 2021 <Link to="#/">Camhaat</Link>. All Right Reserved.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </main>
        </section>
    )
}

export default Frontend
