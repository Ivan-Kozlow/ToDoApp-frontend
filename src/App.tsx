import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useAppDispatch } from './hooks/redux'
import { userActions } from './redux/slices/user/userSlice'
import userService from './services/user.service'

import { Container } from '@mui/material'

import AuthPage from './pages/AuthPage'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { Sidebar } from './components/Sidebar'
import Header from './components/Header'

function App() {
	const dispatch = useAppDispatch()
	const { data } = useQuery({
		queryKey: ['user'],
		queryFn: () => userService.getMe(),
	})
	React.useEffect(() => {
		data && dispatch(userActions.saveUser(data))
	}, [data])

	return (
		<div>
			<Routes>
				<Route path='/' element={<MainPage />}></Route>
				<Route path='/auth' element={<AuthPage />}></Route>
				<Route path='/*' element={<PageNotFound />}></Route>
			</Routes>
			<Container maxWidth={'lg'} className='bg-primary'>
				<Sidebar />
				<Header />
			</Container>
		</div>
	)
}

export default App
