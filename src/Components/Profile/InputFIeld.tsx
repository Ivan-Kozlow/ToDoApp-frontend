import style from 'components/Profile/ProfilePageStyle.module.scss'
import React, { HTMLInputTypeAttribute } from 'react'
import { useFormContext } from 'react-hook-form'

import penInputEdit from 'assets/penInputEdit.svg'
import { validations } from 'consts/validationsForm'
import { IFormFields } from 'pages/AuthPage'

export interface IInputBlockProps {
	label: string
	value: string
	type?: HTMLInputTypeAttribute
	name: 'nickname' | 'email' | 'password'
}

const InputField: React.FC<IInputBlockProps> = ({ label, value, type = 'text', name }) => {
	const inputRef = React.useRef<HTMLInputElement | null>(null)
	const { register } = useFormContext<IFormFields>()
	const { ref, ...rest } = register(name, { ...validations.withoutRequiredField[name] })
	const autoComplete = name === 'nickname' ? '' : `current-${name}`

	return (
		<div className={style.form__elem}>
			<span>{label} - </span>
			<input
				{...rest}
				ref={(e) => {
					ref(e)
					inputRef.current = e
				}}
				placeholder={value || 'Sorry, not info'}
				type={type}
				autoComplete={autoComplete}
			/>
			<button type='button' onClick={() => inputRef.current?.focus()}>
				<img src={penInputEdit} width='20' height='20' alt='Edit logo' />
			</button>
		</div>
	)
}

export default InputField
