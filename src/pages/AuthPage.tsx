import { Navigate } from 'react-router-dom'
import style from 'Components/auth/FormRegister.module.scss'

import { LSKeys } from 'consts/localStorKey'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AuthForm from 'Components/auth/AuthForm'

export interface IFormUserFields {
	nickname: string
	email: string
	password: string
}

const AuthPage: React.FC<{ isRegistration: boolean }> = ({ isRegistration }) => {
	if (localStorage.getItem(LSKeys.token)) return <Navigate to={'/'} />

	return (
		<div className={style.page}>
			<div className={style.wrapper}>
				<AccountCircleIcon sx={{ color: 'darkgray', fontSize: 80 }} />
				<AuthForm isRegistration={isRegistration} />
			</div>
		</div>
	)
}

export default AuthPage
