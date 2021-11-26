import React from 'react'
import { UseAuth } from '../../../Hooks/UseAuth'

function SidebarUser() {
    const {user} = UseAuth();
    return (
        <div className="sidebar-user text-center">
            <div>
                {
                    user?.photoURL ?
                    <img className="img-50 rounded-circle" src={process.env.REACT_APP_API_URL+'/'+user.photoURL} alt="user-avatar"></img>
                    :
                    <img className="img-50 rounded-circle" src="../assets/images/user/1.jpg" alt="user-avatar"></img>
                }
            </div>
            <h6 className="mt-3 f-12">{user.displayName}</h6>
        </div>
    )
}

export default SidebarUser
