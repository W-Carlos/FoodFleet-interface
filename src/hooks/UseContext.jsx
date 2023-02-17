/* Contexto para armazenar informações do usuário */
import React, {createContext, useContext, useState, useEffect} from "react";
import PropTypes from 'prop-types'

//Criando o contexto
const UserContext = createContext({})

//Useprovider vai armazenar as informações que serão disponibilizadas para toda a aplicação
export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({})

    // Função que vai gravar os dados do usuário quando for chamada
    const putUserData = async userInfo => {
        setUserData(userInfo)

        // Gravando os dados do usuário no localStorage
        await localStorage.setItem('foodfleet:userData', JSON.stringify(userInfo))
    }

    // Recuperando as informações do usuário no localStorage quando a aplicação é iniciada
    useEffect(() => {
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('foodfleet:userData')

            if(clientInfo){
                setUserData(JSON.parse(clientInfo))
            }
        }

        loadUserData()
    }, [])

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