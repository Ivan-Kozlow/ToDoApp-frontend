import { useFormContext } from 'react-hook-form'
import React from 'react'

import { validations } from 'consts/validationsForm'

import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { TextareaAutosize } from '@mui/material'
import { IFormInput } from 'types'

type TypeFormInput = {
	require?: boolean
	name: keyof IFormInput
	placeholder: string
	defaultValue?: string
}

const InputTodoForm: React.FC<TypeFormInput> = ({ require = false, name, placeholder, defaultValue = '' }) => {
	const formMethod = useFormContext<IFormInput>()
	const inputErrors = formMethod.formState.errors

	React.useEffect(() => formMethod.setValue(name, defaultValue), [defaultValue])

	const focusInput = () => {
		formMethod.resetField(name)
		formMethod.setFocus(name)
	}

	return (
		<div className='flex flex-wrap'>
			<TextareaAutosize
				autoFocus={require}
				{...formMethod.register(name, require ? validations.withRequiredField.title : undefined)}
				placeholder={placeholder}
				className={
					'dark:text-[#fff] w-full lg:max-w-[200px] max-w-[170px] font-semibold dark:bg-title bg-[#888DA71A] outline-none p-1 rounded-md rounded-r-none max-h-14 resize-none leading-5 overflow-y-scroll'
				}
			/>
			<button
				type='button'
				onClick={() => focusInput()}
				className={'dark:bg-title bg-[#888DA71A] flex items-center cursor-pointer rounded-md rounded-l-none'}
			>
				<ClearOutlinedIcon />
			</button>
			{inputErrors[name] && <p className='mb-1 text-[red]'>{inputErrors[name]?.message}</p>}
		</div>
	)
}

export default InputTodoForm
