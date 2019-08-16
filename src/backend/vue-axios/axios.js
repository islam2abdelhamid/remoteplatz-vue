import axios from 'axios'

const API_URL = process.env.API_URL || 'http://test.remoteplatz.com/api'

export default axios.create({
    baseURL: API_URL,
})