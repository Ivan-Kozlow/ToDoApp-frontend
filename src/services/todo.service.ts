import axios from '../../axios'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { TypeCreateTodo, TypeUpdateTodoData } from './types'
import { IUser } from 'Redux/slices/user/typesUser'

const todoService = {
	async getOneTodo(todoId: ITodo['_id']) {
		return (await axios.get<ITodo>(`/todo/${todoId}`)).data
	},
	async getAll(userId: IUser['_id']) {
		return (await axios.get<ITodo[]>(`/todo/${userId}`)).data
	},
	async create(body: TypeCreateTodo) {
		return (await axios.post<ITodo>(`/todo/create`, body)).data
	},
	async update(todoId: ITodo['_id'], body: TypeUpdateTodoData) {
		return (await axios.patch<{ message: string }>(`/todo/${todoId}`, body)).data
	},
	async delete(todoId: ITodo['_id']) {
		return (await axios.delete<{ message: string }>(`/todo/${todoId}`)).data
	},
}

export default todoService
