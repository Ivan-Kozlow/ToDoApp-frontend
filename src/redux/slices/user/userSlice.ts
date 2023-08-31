import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IInitStateUser, IUser } from './typesUser'

const initialState: IInitStateUser = {
	user: {},
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload
		},
		removeUser(state) {
			state.user = {}
			localStorage.removeItem('token')
		},
	},
})
export const { reducer: userReducer, actions: userActions } = userSlice
