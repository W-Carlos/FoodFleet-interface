/* Arquivo para fazer a conexão com a API */
import axios from 'axios'

const apiFoodFleet = axios.create({
    baseURL: 'http://localhost:3001'
})

// Adicionando Token JWT as chamadas a API
// Antes de enviar a requisição vai ser adicionado o token
apiFoodFleet.interceptors.request.use( async config => {
    const userData = localStorage.getItem('foodfleet:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    
    return config
} )

export default apiFoodFleet