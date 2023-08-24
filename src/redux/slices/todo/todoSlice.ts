import { createSlice } from '@reduxjs/toolkit'
import { IInitStateTodo } from './typesTodo'

const initialState: IInitStateTodo = { todos: [] }

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
})
export const { reducer: todoReducer, actions: todoActions } = todoSlice
