import axios from '../../axios'
import { authLoginPath, authMePath, authRegisterPath } from 'consts/URL'
import { IUserQueryResult, TypeLoginBody, TypeRegisterBody, TypeUpdateUserData } from './types'
import { LSKeys } from 'consts/localStorKey'
import { IFormUserFields } from 'pages/AuthPage'
import { IUser } from 'Redux/slices/user/typesUser'

// TODO add cookie instead localStorage
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

	async update(body: IFormUserFields) {
		const userId = localStorage.getItem(LSKeys.userId) || ''
		let i: keyof IFormUserFields
		for (i in body) body[i] === '' && delete body[i] // <== delete empty values
		return (await axios.patch<string>(`user/${userId}`, body as TypeUpdateUserData)).data
	},
}

export default userService
