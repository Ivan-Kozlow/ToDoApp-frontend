import { useFormContext } from 'react-hook-form'
import { Button } from '@mui/material'

const FormEditUserButtons: React.FC = () => {
	const {
		reset,
		formState: { isSubmitting },
	} = useFormContext()

	return (
		<div className='self-center'>
			<Button disabled={isSubmitting} type='submit' sx={{ width: 'min-content' }} color='inherit' size='large'>
				CHANGE
			</Button>
			<Button sx={{ width: 'min-content' }} color='inherit' size='large' onClick={() => reset()}>
				RESET
			</Button>
		</div>
	)
}

export default FormEditUserButtons