import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IInitStateTodo, ITodo } from './typesTodo'
import { IFormInput, TypeCompleted } from 'types'

const initialState: IInitStateTodo = {
	todos: [],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Omit<ITodo, 'updatedAt' | 'user'>>) => {
			const todo = { ...action.payload }
			state.todos?.unshift(todo)
		},
		saveTasks: (state, action: PayloadAction<ITodo[]>) => {
			state.todos = action.payload
		},
		deleteTask: (state, action: PayloadAction<ITodo['_id']>) => {
			const newTodos = state.todos?.filter((todo) => todo._id !== action.payload)
			if (newTodos) state.todos = newTodos
		},
		updateStatus: (state, action: PayloadAction<ITodo['_id']>) => {
			const todo = state.todos?.find((todo) => todo._id === action.payload)
			if (todo && todo.completed < 2) todo.completed += 1
		},
		editTask: (state, action: PayloadAction<IFormInput>) => {
			const todo = state.todos?.find((todo) => todo._id === action.payload._id)
			if (todo) {
				todo.title = action.payload.title
				todo.body = action.payload.body
			}
		},
		moveTodo: (state, action: PayloadAction<{ _id: string; completed: TypeCompleted }>) => {
			const todo = state.todos?.find((todo) => todo._id === action.payload._id)
			if (todo) todo.completed = action.payload.completed
		},
		sortTasks: (state) => {
			state.todos?.sort((a, b) => a.title.localeCompare(b.title))
		},
	},
})
export const { reducer: todoReducer, actions: todoActions } = todoSlice
