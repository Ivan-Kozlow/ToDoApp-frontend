import axios from '../../axios'

import { IUser } from 'Redux/slices/user/typesUser'
import { authLoginPath, authMePath, authRegisterPath } from 'consts/URL'
import { LSKeys } from 'consts/localStorKey'

import { IUserQueryResult, TypeLoginBody, TypeRegisterBody } from './types'

const userService = {
	async getMe() {
		return (await axios.get<IUser>(authMePath)).data
	},
	async register(body: TypeRegisterBody) {
		return (await axios.post<IUserQueryResult>(authRegisterPath, body)).data
	},
	async login(body: TypeLoginBody) {
		return (await axios.post<IUserQueryResult>(authLoginPath, body)).data
	},

	async update(body: Partial<Pick<IUser, 'nickname' | 'email'> & { password: string; avatar: Blob | string }>) {
		const userId = localStorage.getItem(LSKeys.userId) || ''
		let i: keyof typeof body
		for (i in body) body[i] === '' && delete body[i]
		const data = new FormData()
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		for (i in body) data.append(i, body[i])
		return (await axios.patch<string>(`user/${userId}`, data)).data
	},
}

export default userService
