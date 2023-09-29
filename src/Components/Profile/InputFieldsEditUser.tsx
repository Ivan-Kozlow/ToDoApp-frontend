import React from 'react'
import { useFormContext } from 'react-hook-form'

// utils
import { validations } from 'consts/validationsForm'
import { IFormFields } from 'pages/AuthPage'
import { useAppSelector } from 'hooks/redux'

import { TextField } from '@mui/material'
import ErrorField from 'components/auth/ErrorField'
import InputField from './InputFIeld'

const InputFieldsEditUser: React.FC = () => {
	const id = React.useId()
	const nickname = useAppSelector((state) => state.user.user?.nickname)
	const email = useAppSelector((state) => state.user.user?.email)
	const {
		register,
		formState: { errors: fieldError },
	} = useFormContext<IFormFields>()

	return (
		<>
			{window.outerWidth >= 768 ? (
				<>
					<InputField
						name='nickname'
						label={'name'}
						value={nickname || ''}
						aria-describedby={`${id}-nickname-error`}
					/>
					{fieldError.nickname && (
						<ErrorField id={`${id}-nickname-error`} errorText={fieldError.nickname?.message || ''} />
					)}
					<InputField name='email' label={'email'} value={email || ''} aria-describedby={`${id}-email-error`} />
					{fieldError.email && <ErrorField id={`${id}-email-error`} errorText={fieldError.email.message || ''} />}
					<InputField
						name='password'
						label={'password'}
						value={'not visible'}
						type='password'
						aria-describedby={`${id}-password-error`}
					/>
					{fieldError.password && (
						<ErrorField id={`${id}-password-error`} errorText={fieldError.password.message || ''} />
					)}
				</>
			) : (
				<>
					<TextField
						{...register('nickname', { ...validations.withoutRequiredField.nickname })}
						label={'Nickname'}
						placeholder={'Ваше имя'} // <== change on trusted value
						color={fieldError.email ? 'warning' : 'primary'}
						autoComplete='current-name'
						aria-describedby={`${id}-nickname-error`}
					/>
					{fieldError.nickname && (
						<ErrorField id={`${id}-nickname-error`} errorText={fieldError.nickname.message || ''} />
					)}
					<TextField
						{...register('email', { ...validations.withoutRequiredField.email })}
						label={'Email'}
						placeholder={'Ваша почта'} // <== change on trusted value
						color={fieldError.email ? 'warning' : 'primary'}
						autoComplete='current-email'
						aria-describedby={`${id}-email-error`}
					/>
					{fieldError.email && (
						<ErrorField id={`${id}-email-error`} errorText={fieldError.email.message || 'Email is not valid'} />
					)}
					<TextField
						{...register('password', { ...validations.withoutRequiredField.password })}
						label={'Password'}
						placeholder={'Ваш пароль'} // <== change on trusted value
						type='password'
						color={fieldError.email ? 'warning' : 'primary'}
						autoComplete='current-password'
						aria-describedby={`${id}-password-error`}
					/>
					{fieldError.password && (
						<ErrorField
							id={`${id}-password-error`}
							errorText={fieldError.password.message || 'Некорректный пароль'}
						/>
					)}
				</>
			)}
		</>
	)
}

export default InputFieldsEditUser
