import { useQuery } from '@tanstack/react-query'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// utils
import { userActions } from 'Redux/slices/user/userSlice'
import { todoActions } from 'Redux/slices/todo/todoSlice'
import userService from './services/user.service'
import todoService from 'services/todo.service'
import { useAppDispatch } from './hooks/redux'
import { keyTodoGetAll, keyUserGetMe } from 'consts/queryKeys'
import { authLoginPath, authRegisterPath, calendarPath, profilePath } from 'consts/URL'

import Loader from 'components/Loader'
import MySnackbar from 'components/MySnackbar'
import ProfilePage from 'pages/ProfilePage'
import MainPage from 'pages/MainPage'

const ErrorPage = React.lazy(() => import('pages/ErrorPage/ErrorPage'))
const AuthPage = React.lazy(() => import('pages/AuthPage'))

const App: React.FC = () => {
	const dispatch = useAppDispatch()
	const { data: userData, isError } = useQuery({
		queryKey: [keyUserGetMe],
		queryFn: () => userService.getMe(),
	})
	const { data: todoData, isLoading } = useQuery({
		queryKey: [keyTodoGetAll, userData?._id],
		queryFn: () => todoService.getAll(userData?._id || ''),
		enabled: !!userData?._id,
	})

	React.useEffect(() => {
		userData && dispatch(userActions.saveUser(userData))
		todoData && dispatch(todoActions.saveTasks(todoData))
	}, [userData, todoData])

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
				<Route path='/' element={<MainPage isLoading={isLoading} />}></Route>
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
