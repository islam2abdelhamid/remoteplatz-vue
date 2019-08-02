import axios from 'axios'

const API_URL = process.env.API_URL || 'https://remoteplatzapi.herokuapp.com/api'

export default axios.create({
    baseURL: API_URL,
})