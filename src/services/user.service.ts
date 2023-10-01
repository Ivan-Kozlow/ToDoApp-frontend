import axios from '../../axios'
import { authLoginPath, authMePath, authRegisterPath } from 'consts/URL'
import { IUserQueryResult, TypeLoginBody, TypeRegisterBody, TypeUpdateUserData, TypeUserGetMeResult } from './types'
import { LSKeys } from 'consts/localStorKey'

// TODO add cookie instead localStorage
const userService = {
	async getMe() {
		return (await axios.get<TypeUserGetMeResult>(authMePath)).data
	},
	async register(body: TypeRegisterBody) {
		return (await axios.post<IUserQueryResult>(authRegisterPath, body)).data
	},
	async login(body: TypeLoginBody) {
		return (await axios.post<IUserQueryResult>(authLoginPath, body)).data
	},
	async update(body: TypeUpdateUserData) {
		const userId = localStorage.getItem(LSKeys.userId) || ''
		let i: keyof TypeUpdateUserData
		for (i in body) body[i] === '' && delete body[i] // <== delete empty values

		return (await axios.patch<{ message: string }>(`user/${userId}`, body)).data
	},
}

export default userService
