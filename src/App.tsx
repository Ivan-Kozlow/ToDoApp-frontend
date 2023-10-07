import { useQuery } from '@tanstack/react-query'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// utils
import { userActions } from 'Redux/slices/user/userSlice'
import { authLoginPath, authRegisterPath, calendarPath, profilePath } from 'consts/URL'
import { useAppDispatch } from './hooks/redux'
import userService from './services/user.service'
import { keyUserGetMe } from 'consts/queryKeys'
import { LSKeys } from 'consts/localStorKey'

import MainPage from 'pages/MainPage'
import ProfilePage from 'pages/ProfilePage'
import Loader from 'components/Loader'
import MySnackbar from 'components/MySnackbar'

const ErrorPage = React.lazy(() => import('pages/ErrorPage/ErrorPage'))
const AuthPage = React.lazy(() => import('pages/AuthPage'))

const App: React.FC = () => {
	const dispatch = useAppDispatch()
	const { data, isError } = useQuery({
		queryKey: [keyUserGetMe],
		queryFn: () => userService.getMe(),
	})

	React.useEffect(() => {
		const token = localStorage.getItem(LSKeys.token) || ''
		data && dispatch(userActions.saveUser({ ...data, token }))
	}, [data])

	return (
		<Suspense fallback={<Loader />}>
			{isError && (
				<MySnackbar
					message={'You are not authorized'}
					position={{ horizontal: 'right', vertical: 'bottom' }}
					type={'warning'}
					slideDirection={'left'}
				/>
			)}
			<Routes>
				<Route path='/' element={<MainPage />}></Route>
				<Route path={profilePath} element={<ProfilePage />}></Route>
				<Route path={authLoginPath} element={<AuthPage isRegistration={false} />}></Route>
				<Route path={authRegisterPath} element={<AuthPage isRegistration={true} />}></Route>
				<Route
					path={calendarPath}
					element={<ErrorPage title='Страница в разработке 😉' subTitle='Попробуйте позже' />}
				></Route>
				<Route
					path='/*'
					element={<ErrorPage title='Страница не найдена 😔' subTitle='Попробуйте заново' />}
				></Route>
			</Routes>
		</Suspense>
	)
}

export default App
