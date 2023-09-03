import React from 'react'
import style from './FormRegister.module.scss'
import { useNavigate } from 'react-router-dom'

import { Button, Popover } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const FormButtons: React.FC<{ buttonText: 'Зарегистрироваться' | 'Войти' }> = ({ buttonText }) => {
	const [open, setOpen] = React.useState(false)
	const btnRef = React.useRef<HTMLButtonElement>(null)
	const navigate = useNavigate()

	const inverseButtonText = buttonText === 'Зарегистрироваться' ? 'Войти' : 'Зарегистрироваться'
	const isSmallButton = buttonText.length <= 7
	const btnStyle = {
		padding: `${isSmallButton ? '7px 12px' : '8px 8px'}`,
		fontSize: `${isSmallButton ? '14px' : '12px'}`,
	}

	return (
		<div className={style.buttons}>
			<Button
				title='На главную'
				sx={btnStyle}
				startIcon={isSmallButton ? <ArrowBackRoundedIcon fontSize='small' /> : ''}
				onClick={() => navigate('/')}
			>
				Главая
			</Button>

			<div>
				<Button title={buttonText} sx={btnStyle} type='submit'>
					{buttonText}
				</Button>
				<button
					ref={btnRef}
					className='px-[4px] py-[7px] ml-2'
					title={inverseButtonText}
					type='button'
					onClick={() => setOpen(true)}
				>
					{open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
				</button>
				<Popover
					anchorEl={btnRef.current}
					open={open}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					onClose={() => setOpen(false)}
					sx={{ marginTop: '10px' }}
				>
					<Button
						sx={{
							backgroundColor: 'rgba(0, 0, 0, 0.8)',
							color: 'white',
							':hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
						}}
						variant='outlined'
						onClick={() => {
							setOpen(false)
							navigate(`${buttonText === 'Войти' ? '/auth/register' : '/auth/login'}`)
						}}
					>
						{inverseButtonText}
					</Button>
				</Popover>
			</div>
		</div>
	)
}

export default FormButtons
