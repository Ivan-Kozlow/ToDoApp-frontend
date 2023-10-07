import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { UseFormRegister } from 'react-hook-form'
import { IFormInput } from 'types/types'

type TypeFormInput = {
	register: UseFormRegister<IFormInput>
	focusInput: (name: keyof IFormInput) => void
	require: boolean
	name: keyof IFormInput
	textColor: string
}
const FormInput = ({ register, focusInput, require, name, textColor }: TypeFormInput) => {
	return (
		<div className='flex'>
			<input
				type='text'
				{...register(
					name,
					require ? { required: `${name[0].toUpperCase() + name.substring(1)} is require field!` } : undefined
				)}
				placeholder={name[0].toUpperCase() + name.substring(1)}
				className={`text-${textColor} font-bold bg-title outline-none p-1 rounded-md rounded-r-none`}
			/>
			<button
				type='button'
				onClick={() => focusInput(name)}
				className={`bg-title flex items-center cursor-pointer rounded-md rounded-l-none`}
			>
				<ClearOutlinedIcon />
			</button>
		</div>
	)
}

export default FormInput
