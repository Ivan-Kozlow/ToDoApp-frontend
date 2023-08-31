import axios from '../../axios'
import { IUserQueryResult, TypeLoginBody, TypeRegisterBody } from './types'

const userService = {
	async getMe() {
		const { data } = await axios.get<IUserQueryResult>('/auth/me')
		return data
	},
	async register(body: TypeRegisterBody) {
		const { data } = await axios.post<IUserQueryResult>('/auth/register', body)
		return data
	},
	async login(body: TypeLoginBody) {
		const { data } = await axios.post<IUserQueryResult>('/auth/login', body)
		return data
	},
}
export default userService
