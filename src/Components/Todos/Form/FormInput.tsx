import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { UseFormRegister } from 'react-hook-form'
import { IFormInput } from 'types'

type TypeFormInput = {
	register: UseFormRegister<IFormInput>
	focusInput: () => string
	require: boolean
	name: string
	textColor: string
	placeholder: string
}
const FormInput = ({ register, focusInput, require, name, textColor, placeholder }: TypeFormInput) => {
	return (
		<div className='flex'>
			<input
				type='text'
				{...register(name, require && { required: `Это поле обязательное!` })}
				placeholder={placeholder}
				className={`text-${textColor} font-semibold bg-title outline-none p-1 rounded-md rounded-r-none`}
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
