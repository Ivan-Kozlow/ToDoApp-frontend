import axios from 'axios'
import { LSKeys } from 'consts/localStorKey'

export const baseURL = 'http://localhost:4000/'

const instance = axios.create({ baseURL })

instance.interceptors.request.use((config) => {
	config.headers.Authorization = window.localStorage.getItem(LSKeys.token) || ''
	return config
})

export default instance
