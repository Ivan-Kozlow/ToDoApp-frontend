import style from 'Components/Profile/ProfilePageStyle.module.scss'
import React, { HTMLInputTypeAttribute } from 'react'
import { useFormContext } from 'react-hook-form'

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
				<svg
					className='dark:fill-[#F8F8F8]'
					width='20'
					height='20'
					viewBox='0 0 20 21'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						id='Vector'
						d='M20 5.24002C20.0008 5.10841 19.9756 4.97795 19.9258 4.85611C19.876 4.73427 19.8027 4.62346 19.71 4.53002L15.47 0.290017C15.3766 0.197335 15.2658 0.12401 15.1439 0.0742455C15.0221 0.0244809 14.8916 -0.000744179 14.76 1.67143e-05C14.6284 -0.000744179 14.4979 0.0244809 14.3761 0.0742455C14.2543 0.12401 14.1435 0.197335 14.05 0.290017L11.22 3.12002L0.290017 14.05C0.197335 14.1435 0.12401 14.2543 0.0742455 14.3761C0.0244809 14.4979 -0.000744179 14.6284 1.67143e-05 14.76V19C1.67143e-05 19.2652 0.105374 19.5196 0.29291 19.7071C0.480446 19.8947 0.7348 20 1.00002 20H5.24002C5.37994 20.0076 5.51991 19.9857 5.65084 19.9358C5.78176 19.8858 5.90073 19.8089 6.00002 19.71L16.87 8.78002L19.71 6.00002C19.8013 5.9031 19.8757 5.79155 19.93 5.67002C19.9397 5.59031 19.9397 5.50973 19.93 5.43002C19.9347 5.38347 19.9347 5.33657 19.93 5.29002L20 5.24002ZM4.83002 18H2.00002V15.17L11.93 5.24002L14.76 8.07002L4.83002 18ZM16.17 6.66002L13.34 3.83002L14.76 2.42002L17.58 5.24002L16.17 6.66002Z'
					/>
				</svg>
			</button>
		</div>
	)
}

export default InputField
