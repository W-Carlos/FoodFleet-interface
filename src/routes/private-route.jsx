import React from "react";

import { Route, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function PrivateRoute({element,children, ...rest}){
    const user = localStorage.getItem('foodfleet:userData')

    if(!user){
       return <Navigate replace to='/login' />
    }

    return children
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}