import axios from '../../axios'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { TypeCreateTodo, TypeUpdateTodoData } from './types'

const todoService = {
	async getOneTodo(todoId: string) {
		axios.get<ITodo>(`/todo/${todoId}`)
	},
	async getAll(todoId: string) {
		axios.get<ITodo[]>(`/todo/${todoId}`)
	},
	async create(body: TypeCreateTodo) {
		axios.post<ITodo>(`/todo/create`, body)
	},
	async update(todoId: string, body: TypeUpdateTodoData) {
		axios.patch<{ message: string }>(`/todo/${todoId}`, body)
	},
	async delete(todoId: string) {
		axios.delete<{ message: string }>(`/todo/${todoId}`)
	},
}

export default todoService
