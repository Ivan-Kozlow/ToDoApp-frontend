import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'

import { userActions } from './Redux/slices/user/userSlice'
import { useAppDispatch } from './hooks/redux'
import userService from './services/user.service'

import AuthPage from './pages/AuthPage'
import MainPage from './pages/MainPage'
import PageNotFound from './components/PageNotFound/PageNotFound'

const App: React.FC = () => {
	const dispatch = useAppDispatch()
	const { data } = useQuery({
		queryKey: ['user'],
		queryFn: () => userService.getMe(),
	})

	React.useEffect(() => {
		data && dispatch(userActions.saveUser(data))
	}, [data])

	return (
		<Routes>
			<Route path='/' element={<MainPage />}></Route>
			<Route path='/auth/register' element={<AuthPage isRegistration={true} />}></Route>
			<Route path='/auth/login' element={<AuthPage isRegistration={false} />}></Route>
			<Route path='/*' element={<PageNotFound />}></Route>
		</Routes>
	)
}

export default App
