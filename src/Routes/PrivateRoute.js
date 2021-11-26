import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { UseAuth } from '../Hooks/UseAuth'

function PrivateRoute({ children }) {
    let { user, set_previous_location } = UseAuth();
    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        set_previous_location(location.pathname);
    }, [])

    if ( !( user?.email?.length ) ) {
        return (
            <Navigate to="/login" state={{ form: location }}></Navigate>
        )
    }

    return children
}

export default PrivateRoute
