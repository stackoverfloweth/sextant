import axios from 'axios'

export const fetchSettings = () => axios.get('http://localhost:3000/setup.json')