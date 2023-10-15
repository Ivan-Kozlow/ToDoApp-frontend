import style from 'components/Profile/ProfilePageStyle.module.scss'
import React, { HTMLInputTypeAttribute } from 'react'
import { useFormContext } from 'react-hook-form'

import penInputEdit from 'assets/penInputEdit.svg'
import { validations } from 'consts/validationsForm'
import { IFormUserFields } from 'pages/AuthPage'

export interface IInputBlockProps {
	label: string
	value: string
	type?: HTMLInputTypeAttribute
	name: 'nickname' | 'email' | 'password'
}

const InputField: React.FC<IInputBlockProps> = ({ label, value, type = 'text', name }) => {
	const { register, setFocus } = useFormContext<IFormUserFields>()
	const autoComplete = name === 'nickname' ? '' : `current-${name}`

	return (
		<div className={style.form__elem}>
			<span>{label} - </span>
			<input
				{...register(name, { ...validations.withoutRequiredField[name] })}
				placeholder={value || 'Sorry, not info'}
				type={type}
				autoComplete={autoComplete}
			/>
			<button type='button' onClick={() => setFocus(name)}>
				<img src={penInputEdit} width='20' height='20' alt='Edit logo' />
			</button>
		</div>
	)
}

export default InputField
