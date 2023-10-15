import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IInitStateTodo, ITodo } from './typesTodo'
import { IFormInput, TypeCompleted } from 'types'

const initialState: IInitStateTodo = {
	todos: [
		{
			_id: '1',
			user: '',
			title: 'lorem',
			body: 'hello body 1',
			completed: 1,
			createdAt: '22.04.2023',
			updatedAt: '',
		},
		{ _id: '3', user: '', title: 'dolor', body: 'hello body 3', completed: 2, createdAt: '', updatedAt: '' },
		{ _id: '4', user: '', title: 'sit ', body: 'hello body 4', completed: 2, createdAt: '', updatedAt: '' },
		{ _id: '5', user: '', title: ' amet ', body: 'hello body 5', completed: 2, createdAt: '', updatedAt: '' },
		{ _id: '6', user: '', title: 'consectetur 2', body: 'hello body 2', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '7', user: '', title: 'adipisicing ', body: 'hello body 3', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '8', user: '', title: 'elit', body: 'hello body 4', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '9', user: '', title: '2', body: 'hello body 5', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '10', user: '', title: 'name2', body: 'hello body 6', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '11', user: '', title: 'sope', body: 'hello body 7', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '12', user: '', title: 'hello 2', body: 'hello body 8', completed: 0, createdAt: '', updatedAt: '' },
	],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Omit<ITodo, 'updatedAt' | 'user'>>) => {
			const todo = { ...action.payload }
			state.todos?.unshift(todo)
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
			console.log(todo);
			
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
