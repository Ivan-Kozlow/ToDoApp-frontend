import { createSlice } from '@reduxjs/toolkit'
import { IInitStateTodo } from './typesTodo'

const initialState: IInitStateTodo = {
	todos: [
		{ _id: '1', title: 'hello', body: 'hello body 1', completed: 1, createdAt: '', updatedAt: '' },
		{ _id: '1', title: 'hello', body: 'hello body 2', completed: 1, createdAt: '', updatedAt: '' },
		{ _id: '1', title: 'hello', body: 'hello body 3', completed: 2, createdAt: '', updatedAt: '' },
		{ _id: '1', title: 'hello', body: 'hello body 4', completed: 2, createdAt: '', updatedAt: '' },
		{ _id: '1', title: 'hello', body: 'hello body 5', completed: 2, createdAt: '', updatedAt: '' },
		{ _id: '2', title: 'hello 2', body: 'hello body 2', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '2', title: 'hello 2', body: 'hello body 3', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '2', title: 'hello 2', body: 'hello body 4', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '2', title: 'hello 2', body: 'hello body 5', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '2', title: 'hello 2', body: 'hello body 6', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '2', title: 'hello 2', body: 'hello body 7', completed: 0, createdAt: '', updatedAt: '' },
		{ _id: '2', title: 'hello 2', body: 'hello body 8', completed: 0, createdAt: '', updatedAt: '' },
	],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
})
export const { reducer: todoReducer, actions: todoActions } = todoSlice
