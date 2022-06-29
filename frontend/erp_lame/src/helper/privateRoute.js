import React, { useContext } from "react";
import { Route, } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { getUserFromLocalStorage } from "./auth";


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    return (
        <Route
            {...rest}
            render={routeProps =>
                getUserFromLocalStorage() != null ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Navigate to={"/login"} />
                )
            }
        />
    );
};

export default PrivateRoute


