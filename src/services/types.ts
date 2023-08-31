import { IUser } from 'redux/slices/user/typesUser'

export type IUserQueryResult = {
	token: string
	__v: number
} & IUser

export type TypeRegisterBody = Pick<IUser, 'email' | 'nickname'> & { password: string }
export type TypeLoginBody = Pick<IUser, 'email'> & { password: string }
