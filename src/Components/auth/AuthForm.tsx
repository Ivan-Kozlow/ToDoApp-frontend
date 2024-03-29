import style from './FormRegister.module.scss'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeAxiosErrorResponse, getErrorMessageFromResponse } from 'utils/getErrorMessageOnResponse'
import userService from 'services/user.service'
import { IUserQueryResult } from 'services/types'
import { userActions } from 'Redux/slices/user/userSlice'
import { useAppDispatch } from 'hooks/redux'
import { validations } from 'consts/validationsForm'
import { keyUserAuth, keyUserGetMe } from 'consts/queryKeys'

import { TextField } from '@mui/material'
import MySnackbar from 'Components/MySnackbar'
import { IFormUserFields } from 'pages/AuthPage'
import ErrorField from './ErrorField'
import FormButtons from './FormButtons'

const AuthForm: React.FC<{ isRegistration: boolean }> = ({ isRegistration }) => {
	const id = React.useId()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const {
		handleSubmit,
		register,
		clearErrors,
		formState: { isSubmitting, errors: fieldError },
	} = useForm<IFormUserFields>()

	const queryClient = useQueryClient()
	const { mutate, error } = useMutation<IUserQueryResult, TypeAxiosErrorResponse, IFormUserFields>({
		mutationKey: [keyUserAuth],
		mutationFn: (data) => (isRegistration ? userService.register(data) : userService.login(data)),
		onSuccess: (data) => {
			dispatch(userActions.saveUser(data))
			navigate('/')
			queryClient.invalidateQueries([keyUserGetMe])
		},
	})

	return (
		<form className={style.form} onSubmit={handleSubmit((data) => mutate(data))}>
			{isRegistration && (
				<TextField
					{...register('nickname', { ...validations.withRequiredField.nickname })}
					label='Имя'
					variant='outlined'
					color={fieldError.nickname ? 'warning' : 'primary'}
					autoComplete={isRegistration ? 'new-name' : 'current-name'}
					aria-describedby={`${id}-nickname-error`}
				/>
			)}
			{fieldError.nickname && (
				<ErrorField id={`${id}-nickname-error`} errorText={fieldError.nickname.message || ''} />
			)}
			<TextField
				{...register('email', { ...validations.withRequiredField.email })}
				label='Почта'
				variant='outlined'
				color={fieldError.email ? 'warning' : 'primary'}
				autoComplete={isRegistration ? 'new-email' : 'current-email'}
				aria-describedby={`${id}-email-error`}
			/>
			{fieldError.email && (
				<ErrorField id={`${id}-email-error`} errorText={fieldError.email.message || 'Email is not valid'} />
			)}
			<TextField
				{...register('password', { ...validations.withRequiredField.password })}
				type='password'
				label='Пароль'
				variant='outlined'
				color={fieldError.password ? 'warning' : 'primary'}
				autoComplete={isRegistration ? 'new-email' : 'current-email'}
				aria-describedby={`${id}-password-error`}
			/>
			{fieldError.password && (
				<ErrorField id={`${id}-password-error`} errorText={fieldError.password.message || 'Некорректный пароль'} />
			)}
			{error && (
				<MySnackbar
					slideDirection='down'
					type='warning'
					position={{ vertical: 'top', horizontal: 'center' }}
					message={
						getErrorMessageFromResponse(error) ||
						'Ой, попробуйте введите другие данные. Если ошибка повториться, попробуйте позже'
					}
				/>
			)}
			<FormButtons
				isSubmitting={isSubmitting}
				buttonText={isRegistration ? 'Зарегистрироваться' : 'Войти'}
				clearErrors={clearErrors}
			/>
		</form>
	)
}

export default AuthForm
