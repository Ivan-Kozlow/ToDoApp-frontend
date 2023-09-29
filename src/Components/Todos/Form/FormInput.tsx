import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { UseFormRegister } from 'react-hook-form'
import { IFormInput } from 'types/types'

type TypeFormInput = {
	register: UseFormRegister<IFormInput>
	focusInput: () => string
	name: string
	textColor: string
}
const FormInput = ({ register, focusInput, name, textColor }: TypeFormInput) => {
	return (
		<div className='flex'>
			<input
				type='text'
				{...register(name, {
					required: `${name[0].toUpperCase() + name.slice(1)} is require field!`,
				})}
				placeholder={name[0].toUpperCase() + name.slice(1)}
				className={`text-${textColor} font-bold bg-title outline-none p-1 rounded-md rounded-r-none`}
			/>
			<div
				onClick={() => focusInput(name)}
				className={`bg-title flex items-center cursor-pointer rounded-md rounded-l-none`}
			>
				<ClearOutlinedIcon />
			</div>
		</div>
	)
}

export default FormInput
