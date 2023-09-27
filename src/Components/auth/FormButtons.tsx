import React from 'react'
import { UseFormClearErrors } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import style from './FormRegister.module.scss'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Button, Popover } from '@mui/material'
import { authLoginPath, authRegisterPath } from 'consts/URL'
import { IFormFields } from 'pages/AuthPage'

interface IFormButtonsProps {
	buttonText: 'Зарегистрироваться' | 'Войти'
	isSubmitting: boolean
	clearErrors: UseFormClearErrors<IFormFields>
}

const FormButtons: React.FC<IFormButtonsProps> = ({ buttonText, clearErrors, isSubmitting }) => {
	const [open, setOpen] = React.useState(false)
	const btnRef = React.useRef<HTMLButtonElement>(null)
	const navigate = useNavigate()

	const inverseBtnTextForSwitch = buttonText === 'Зарегистрироваться' ? 'Войти' : 'Зарегистрироваться'
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
				<Button disabled={isSubmitting} title={buttonText} sx={btnStyle} type='submit'>
					{buttonText}
				</Button>

				{/* 👇 Popover 👇 */}
				<button
					ref={btnRef}
					className='px-[4px] py-[7px] ml-2'
					title={inverseBtnTextForSwitch}
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
							clearErrors('nickname')
							setOpen(false)
							navigate(`${buttonText === 'Войти' ? authRegisterPath : authLoginPath}`)
						}}
					>
						{inverseBtnTextForSwitch}
					</Button>
				</Popover>
			</div>
		</div>
	)
}

export default FormButtons
