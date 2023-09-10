import axios from '../../axios'
import { authLoginPath, authMePath, authRegisterPath } from 'consts/URL'
import { IUserQueryResult, TypeLoginBody, TypeRegisterBody, TypeUpdateUserData, TypeUserGetMeResult } from './types'

// TODO add cookie, instead localStorage
const userService = {
	async getMe() {
		const { data } = await axios.get<TypeUserGetMeResult>(authMePath)
		return data
	},
	async register(body: TypeRegisterBody) {
		const { data } = await axios.post<IUserQueryResult>(authRegisterPath, body)
		return data
	},
	async login(body: TypeLoginBody) {
		const { data } = await axios.post<IUserQueryResult>(authLoginPath, body)
		return data
	},
	async update(body: TypeUpdateUserData) {
		const userId = localStorage.getItem('userId') || ''
		const { data } = await axios.patch<{ message: string }>(`user${userId}`, body)
		return data
	},
}
export default userService
