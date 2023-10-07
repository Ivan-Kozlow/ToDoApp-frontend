import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IInitStateTodo, ITodo } from './typesTodo'

const initialState: IInitStateTodo = {
	todos: [
		{ _id: '1', title: 'lorem', body: 'hello body 1', completed: 1, createdAt: '22.04.2023', updatedAt: '' },
		{ _id: '2', title: 'ipsum', body: 'hello body 2', completed: 1, createdAt: '', updatedAt: '' },
		{ _id: '3', title: 'dolor', body: 'hello body 3', completed: 2, createdAt: '', updatedAt: '' },
		{ _id: '4', title: 'sit ', body: 'hello body 4', completed: 2, createdAt: '', updatedAt: '' },
		{ _id: '5', title: ' amet ', body: 'hello body 5', completed: 2, createdAt: '', updatedAt: '' },
		{ _id: '6', title: 'consectetur 2', body: 'hello body 2', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '7', title: 'adipisicing ', body: 'hello body 3', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '8', title: 'elit', body: 'hello body 4', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '9', title: '2', body: 'hello body 5', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '10', title: 'name2', body: 'hello body 6', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '11', title: 'sope', body: 'hello body 7', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '12', title: 'hello 2', body: 'hello body 8', completed: 0, createdAt: '', updatedAt: '' },
	],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<ITodo>) => {
			const todo = {
				_id: (Math.random() * 100).toString(),
				title: action.payload.title,
				body: action.payload.body,
				completed: 0,
				createdAt: action.payload.createdAt,
			}
			state.todos?.unshift(todo)
		},
		deleteTask: (state, action: PayloadAction<ITodo>) => {
			const newTodos = state.todos?.filter((todo) => todo._id !== action.payload._id)
			if (newTodos) state.todos = newTodos
		},
		updateStatus: (state, action: PayloadAction<ITodo>) => {
			const todo = state.todos?.find((todo) => todo._id === action.payload._id)
			if (todo && todo.completed < 2) todo.completed += 1
		},
		editTask: (state, action) => {
			const todo = state.todos?.find((todo) => todo._id === action.payload._id)
			if (todo) {
				todo.title = action.payload.title
				todo.body = action.payload.body
			}
		},
	},
})
export const { addTask, deleteTask, updateStatus, editTask } = todoSlice.actions
export const { reducer: todoReducer, actions: todoActions } = todoSlice
