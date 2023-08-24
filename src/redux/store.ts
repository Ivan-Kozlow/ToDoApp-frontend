import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user/userSlice'

const allReducers = combineReducers({
	user: userReducer,
})

export const store = configureStore({
	reducer: allReducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
