import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IInitStateUser, IUser } from './typesUser'

const initialState: IInitStateUser = {
	user: { nickname: 'User', createdAt: new Date(), updateAt: new Date(), email: '' },
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload
		},
	},
})
export const { reducer: userReducer, actions: userActions } = userSlice
