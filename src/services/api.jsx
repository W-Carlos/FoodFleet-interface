/* Arquivo para fazer a conexão com a API */
import axios from 'axios'

const apiFoodFleet = axios.create({
    baseURL: 'http://localhost:3001'
})

export default apiFoodFleet