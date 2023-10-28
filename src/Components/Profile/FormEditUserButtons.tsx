import { useFormContext } from 'react-hook-form'
import { Button } from '@mui/material'

const FormEditUserButtons: React.FC = () => {
	const {
		reset,
		watch,
		formState: { isSubmitting },
	} = useFormContext()

	const someFieldIsEmpty = !Object.values(watch()).some((el) => el !== '')

	return (
		<div className='self-center'>
			<Button
				disabled={isSubmitting || someFieldIsEmpty}
				type='submit'
				sx={{ width: 'min-content' }}
				color='inherit'
				size='large'
			>
				Изменить
			</Button>
			<Button
				disabled={someFieldIsEmpty}
				sx={{ width: 'min-content' }}
				color='inherit'
				size='large'
				onClick={() => reset()}
			>
				Сбросить
			</Button>
		</div>
	)
}

export default FormEditUserButtons
