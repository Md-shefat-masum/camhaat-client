import React, { useEffect } from 'react'
import { Navigate, useLocation,useNavigate } from 'react-router-dom';
import { UseAuth } from '../Hooks/UseAuth'

function AdminRoute({ children }) {
    let { user, set_previous_location } = UseAuth();
    let location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        console.log(user.role,location.pathname);
        set_previous_location(location.pathname);
        if(window.location.pathname.split('/')[1] === 'dashboard' && user.role === 'user'){
            navigate(`/`);
        }
    }, [])

    if ( !( user?.email?.length ) ) {
        return (
            <Navigate to="/login" state={{ from: location }}></Navigate>
        )
    }

    if(user.role === 'user'){
        <Navigate to="/" state={{ from: location }}></Navigate>
    }

    return children

}

export default AdminRoute
