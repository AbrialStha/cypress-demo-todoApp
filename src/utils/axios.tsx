import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://localhost:8080/',
    timeout: 0,
    headers: {
        "Content-Type": "application/json"
    }
})

export default instance;