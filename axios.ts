import axios from 'axios'
import { LSKeys } from 'consts/localStorKey'

const instance = axios.create({ baseURL: 'http://localhost:4000/' })

instance.interceptors.request.use((config) => {
	config.headers.Authorization = window.localStorage.getItem(LSKeys.token) || ''
	return config
})

export default instance
