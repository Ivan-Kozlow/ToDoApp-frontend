import { TextField } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import style from './FormRegister.module.scss'

// utils
import { userActions } from 'Redux/slices/user/userSlice'
import { AxiosError } from 'axios'
import { useAppDispatch } from 'hooks/redux'
import { IUserQueryResult } from 'services/types'
import userService from 'services/user.service'

// components
import MySnackbar from 'components/MySnackbar'
import { IFormFields } from 'pages/AuthPage'
import ErrorFields from './ErrorFields'
import FormButtons from './FormButtons'

const AuthForm: React.FC<{ isRegistration: boolean }> = ({ isRegistration }) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const {
		handleSubmit,
		register,
		formState: { errors: fieldError },
	} = useForm<IFormFields>()

	const { mutate, error } = useMutation<IUserQueryResult, AxiosError<{ message: string }>, IFormFields, unknown>({
		mutationKey: ['auth user'],
		mutationFn: (data: IFormFields) => (isRegistration ? userService.register(data) : userService.login(data)),
		onSuccess: (data) => {
			localStorage.setItem('token', data.token)
			dispatch(userActions.saveUser(data))
			navigate('/')
		},
	})

	const fieldIsRequire = 'This field is required'

	return (
		<form className={style.form} onSubmit={handleSubmit((data) => mutate(data))}>
			{isRegistration && (
				<TextField
					{...register('nickname', {
						required: fieldIsRequire,
						minLength: { value: 2, message: 'Name less 2 symbols' },
						pattern: /^[a-zA-Zа-яА-Я]{2}/,
					})}
					label='Nickname'
					variant='outlined'
					color={fieldError.nickname ? 'warning' : 'primary'}
				/>
			)}
			{fieldError.nickname && <ErrorFields errorText={fieldError.nickname.message || ''} />}
			<TextField
				{...register('email', { required: fieldIsRequire, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
				label='Email'
				variant='outlined'
				color={fieldError.email ? 'warning' : 'primary'}
			/>
			{fieldError.email && <ErrorFields errorText={fieldError.email.message || 'Email is not valid'} />}
			<TextField
				{...register('password', {
					required: fieldIsRequire,
					minLength: { value: 8, message: 'password less 8 symbols' },
				})}
				type='password'
				autoComplete='new-password'
				label='Password'
				variant='outlined'
				color={fieldError.password ? 'warning' : 'primary'}
			/>
			{fieldError.password && <ErrorFields errorText={fieldError.password.message || 'Некорректный пароль'} />}
			{error && (
				<MySnackbar
					slideDirection='down'
					type='warning'
					position={{ vertical: 'top', horizontal: 'center' }}
					message={
						error?.response?.data.message ||
						'Ой, попробуйте введите другие данные. Если ошибка повториться, попробуйте позже'
					}
				/>
			)}
			<FormButtons buttonText={isRegistration ? 'Зарегистрироваться' : 'Войти'} />
		</form>
	)
}

export default AuthForm
