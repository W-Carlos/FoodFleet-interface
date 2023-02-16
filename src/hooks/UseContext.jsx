/* Contexto para armazenar informações do usuário */
import React, {createContext, useContext} from "react";
import PropTypes from 'prop-types'

//Criando o contexto
const UserContext = createContext({})

//Useprovider vai armazenar as informações que serão disponibilizadas para toda a aplicação
export const UserProvider = ({children}) => {
    const user = {name: 'Carlos', age: 25}
    const userTwo = {name: 'João', age: 50}

    return(
        <UserContext.Provider value={{user, userTwo}}>
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