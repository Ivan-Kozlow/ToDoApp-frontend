import axios from 'axios'
import { IUser } from 'redux/slices/user/typesUser'
import { IPostResult, TypeLoginBody, TypeRegisterBody } from './types'

const userService = {
	async getMe() {
		const { data } = await axios.get<IUser>('http://localhost:4444/auth/me')
		return data
	},
	async register(body: TypeRegisterBody) {
		const { data } = await axios.post<IPostResult>('http://localhost:4444/auth/register', body)
		return data
	},
	async login(body: TypeLoginBody) {
		const { data } = await axios.post<IPostResult>('http://localhost:4444/auth/register', body)
		return data
	},
}
export default userService
