import { IUser } from 'redux/slices/user/typesUser'

export interface IUserQueryResult extends IUser {
	token: string
	__v: number
}

export type TypeUserGetMeResult = Omit<IUserQueryResult, 'token'>
export type TypeRegisterBody = Pick<IUser, 'email' | 'nickname'> & { password: string }
export type TypeLoginBody = Pick<IUser, 'email'> & { password: string }
export type TypeUpdateUserData = Partial<Pick<IUser, 'email' | 'nickname'>> & { password: string }
