import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { TextareaAutosize } from '@mui/material'
import { validations } from 'consts/validationsForm'
import { useFormContext } from 'react-hook-form'
import { IFormInput } from 'types'

type TypeFormInput = {
	require?: boolean
	name: keyof IFormInput
	textColor: string
	placeholder: string
}

const FormInput: React.FC<TypeFormInput> = ({ require = false, name, textColor, placeholder }) => {
	const {
		register,
		resetField,
		setFocus,
		formState: { errors: fieldError },
	} = useFormContext<IFormInput>()

	const focusInput = (name: keyof IFormInput) => {
		resetField(name)
		setFocus(name)
	}

	return (
		<div className='flex flex-wrap'>
			<TextareaAutosize
				{...register(name, require ? validations.withRequiredField.title : undefined)}
				placeholder={placeholder}
				className={`text-${textColor} w-full lg:max-w-[200px] max-w-[180px] font-semibold bg-title outline-none p-1 rounded-md rounded-r-none max-h-14 resize-none leading-5 overflow-y-scroll`}
			/>
			<button
				type='button'
				onClick={() => focusInput(name)}
				className={`bg-title flex items-center cursor-pointer rounded-md rounded-l-none`}
			>
				<ClearOutlinedIcon />
			</button>
			{fieldError[name] && <p className='mb-1 text-[red]'>{fieldError[name]?.message}</p>}
		</div>
	)
}

export default FormInput
