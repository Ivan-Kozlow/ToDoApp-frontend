import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUserQueryResult } from 'services/types'
import { IInitStateUser } from './typesUser'

const initialState: IInitStateUser = {
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser(state, action: PayloadAction<IUserQueryResult>) {
			state.user = action.payload
			localStorage.setItem('token', action.payload.token)
			localStorage.setItem('userId', `${action.payload._id}`)
		},
		removeUser(state) {
			state.user = null
			localStorage.removeItem('token')
			localStorage.removeItem('userId')
		},
	},
})
export const { reducer: userReducer, actions: userActions } = userSlice
