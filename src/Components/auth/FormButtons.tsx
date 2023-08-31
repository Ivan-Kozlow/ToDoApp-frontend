import style from './FormRegister.module.scss'

import { Button } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { useNavigate } from 'react-router-dom'

const FormButtons: React.FC<{ buttonText: string }> = ({ buttonText }) => {
	const navigate = useNavigate()

	const isSmallButton = buttonText.length <= 7

	const getFontSize = () => {
		return `${isSmallButton ? '14px' : '12px'}`
	}

	return (
		<div className={style.buttons}>
			<Button
				sx={{
					padding: `${isSmallButton ? '7px 12px' : '8px 8px'}`,
					fontSize: getFontSize(),
				}}
				startIcon={isSmallButton ? <ArrowBackRoundedIcon fontSize='small' /> : ''}
				onClick={() => navigate('/')}
			>
				Главая
			</Button>
			<Button
				sx={{
					padding: `${isSmallButton ? '7px 15px' : '8px 8px'}`,
					fontSize: getFontSize(),
				}}
				type='submit'
			>
				{buttonText}
			</Button>
		</div>
	)
}

export default FormButtons
