import React from 'react'
import { UseAuth } from '../../../Hooks/UseAuth'

function UserDashboardAccount() {
    const { user } = UseAuth();
    return (
        <div>
            <div className="account-details-form checkout-form">
                <h3>Account Details</h3>
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6 col-12 mb-4">
                            <label htmlFor="">first name</label>
                            <input id="first-name" defaultValue={user.first_name} placeholder="First Name" type="text" />
                        </div>

                        <div className="col-lg-6 col-12 mb-4">
                            <label htmlFor="">last name</label>
                            <input id="last-name" defaultValue={user.last_name} placeholder="Last Name" type="text" />
                        </div>

                        <div className="col-12 mb-4">
                            <label htmlFor="">full name</label>
                            <input id="display-name" defaultValue={user.displayName} placeholder="Display Name" type="text" />
                        </div>

                        <div className="col-12 mb-4">
                            <h4>Password change</h4>
                        </div>

                        <div className="col-lg-6 col-12 mb-4">
                            <label htmlFor="">new password</label>
                            <input id="new-pwd" placeholder="New Password" type="password" />
                        </div>

                        <div className="col-lg-6 col-12 mb-4">
                            <label htmlFor="">confirm password</label>
                            <input id="confirm-pwd" placeholder="Confirm Password" type="password" />
                        </div>

                        <div className="col-12">
                            <button type="button" className="btn btn-success btn-pill btn-lg">Save Changes (comming soon)</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserDashboardAccount
