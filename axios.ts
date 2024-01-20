import axios from 'axios'

import { LSKeys } from 'consts/localStorKey'

export const baseURL = import.meta.env.VITE_BACKEND_URL

const instance = axios.create({ baseURL })

instance.interceptors.request.use((config) => {
	config.headers.Authorization = window.localStorage.getItem(LSKeys.token) || ''
	return config
})

export default instance
