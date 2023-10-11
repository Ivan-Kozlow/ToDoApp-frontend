import { ITodo } from 'Redux/slices/todo/typesTodo'
import { IUser } from 'redux/slices/user/typesUser'

// User ----------------------------
export interface IUserQueryResult extends IUser {
	token: string
	__v: number
}

export type TypeUserGetMeResult = Omit<IUserQueryResult, 'token'>
export type TypeRegisterBody = Pick<IUser, 'email' | 'nickname'> & { password: string; avatar?: string }
export type TypeLoginBody = Pick<IUser, 'email'> & { password: string }
export type TypeUpdateUserData = Partial<Pick<IUser, 'email' | 'nickname'> & { password: string; avatar: string }>

// Todo ----------------------------

export type TypeUpdateTodoData = Partial<Pick<ITodo, 'title' | 'body' | 'completed'>>
export type TypeCreateTodo = Pick<ITodo, 'title'> & TypeUpdateTodoData
