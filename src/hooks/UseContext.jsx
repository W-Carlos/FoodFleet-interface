/* Contexto para armazenar informações do usuário */
import React, {createContext, useContext, useState} from "react";
import PropTypes from 'prop-types'

//Criando o contexto
const UserContext = createContext({})

//Useprovider vai armazenar as informações que serão disponibilizadas para toda a aplicação
export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({})

    // Função que vai gravar os dados do usuário quando for chamada
    const putUserData = userInfo => {
        setUserData(userInfo)
    }

    return(
        <UserContext.Provider value={{ putUserData, userData }}>
            {children}
        </UserContext.Provider>
    )
}

//useContext vai disponibilizar os dados para utilizar na aplicação
export const useUser = () => {
    const context = useContext(UserContext)

    if(!context) {
        throw new Error("useUser deve ser usado com userContext")
    }

    return context
}

// Validando o proptypes
UserProvider.protoTypes = {
    children: PropTypes.node
}