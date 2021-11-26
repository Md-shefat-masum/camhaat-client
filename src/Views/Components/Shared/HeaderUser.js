import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { UseAuth } from '../../../Hooks/UseAuth'

function HeaderUser() {
    let { log_out, user } = UseAuth();
    const [ShowLogoutModal, setShowLogoutModal] = useState(false);

    const handle_logout = () => {
        log_out();
        setShowLogoutModal(!ShowLogoutModal);
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                {
                    user?.photoURL ?

                        <img className="align-self-center pull-right flex-shrink-0 me-2"
                            src={process.env.REACT_APP_API_URL+'/'+user.photoURL} style={{height:20}} alt="header-user" />
                        :

                        <img className="align-self-center pull-right flex-shrink-0 me-2"
                            src="../assets/images/dashboard/user.png" alt="header-user" />
                }
                <div>
                    <h6 className="m-0 txt-dark f-16">
                        My Account
                        <i className="fa fa-angle-down pull-right ms-2"></i>
                    </h6>
                </div>
            </div>
            <ul className="profile-dropdown onhover-show-div p-20">
                <li>
                    <Link to="/dashboard/profile">
                        <i className="icon-user"></i>
                        Profile
                    </Link>
                </li>
                <li>
                    <a href="#logout" onClick={()=>{setShowLogoutModal(!ShowLogoutModal)}}>
                        <i className="icon-power-off"></i>
                        Logout
                    </a>
                </li>
            </ul>
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
        </div>
    )
}

export default HeaderUser
