import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LSKeys } from 'consts/localStorKey'
import { IInitStateUser, IUser } from './typesUser'

const initialState: IInitStateUser = {
	user: null,
}

// FIXME add createSelector getNickname() -email() -user()
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser(state, action: PayloadAction<IUser & { token?: string }>) {
			const { token, ...userData } = action.payload
			state.user = userData
			!localStorage.getItem(LSKeys.token) && localStorage.setItem(LSKeys.token, token || '')
			localStorage.setItem(LSKeys.userId, `${action.payload._id}`)
		},
		removeUser(state) {
			state.user = null
			localStorage.removeItem('token')
			localStorage.removeItem('userId')
		},
		updateAvatar(state, action: PayloadAction<string>) {
			state.user?.avatar ?? action.payload // TODO check update avatar
		},
	},
})
export const { reducer: userReducer, actions: userActions } = userSlice
