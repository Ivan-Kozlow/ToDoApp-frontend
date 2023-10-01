import style from 'components/auth/FormRegister.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AuthForm from 'components/auth/AuthForm'
import { Navigate } from 'react-router-dom'
import { LSKeys } from 'consts/localStorKey'

export interface IFormFields {
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
