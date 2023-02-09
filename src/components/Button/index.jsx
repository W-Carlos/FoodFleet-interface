import React from "react";
import PropTypes from "prop-types"

import { ContainerButton } from './styles'

function Button({children, ...rest}){
    return <ContainerButton {...rest}>{children}</ContainerButton>
}

export default Button

// Validando o PropTypes
Button.propTypes = {
    children: PropTypes.string
}