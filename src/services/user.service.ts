import axios from '../../axios'
import { IUserQueryResult, TypeLoginBody, TypeRegisterBody, TypeUpdateUserData, TypeUserGetMeResult } from './types'

const userService = {
	async getMe() {
		const { data } = await axios.get<TypeUserGetMeResult>('auth/me')
		return data
	},
	async register(body: TypeRegisterBody) {
		const { data } = await axios.post<IUserQueryResult>('auth/register', body)
		return data
	},
	async login(body: TypeLoginBody) {
		const { data } = await axios.post<IUserQueryResult>('auth/login', body)
		return data
	},
	async update(body: TypeUpdateUserData) {
		const { data } = await axios.post<{ message: string }>('user', body)
		return data
	},
}
export default userService
