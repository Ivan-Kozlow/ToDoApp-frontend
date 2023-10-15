import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// utils
import { authLoginPath, calendarPath, profilePath } from 'consts/URL'
import { useAppDispatch } from 'hooks/redux'
import { userActions } from 'Redux/slices/user/userSlice'
import { LSKeys } from 'consts/localStorKey'

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import LoginIcon from '@mui/icons-material/Login'

const icons = [
	{ icon: <GridViewOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />, title: 'Главная' },
	{ icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />, title: 'Профиль' },
	{ icon: <CalendarTodayOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />, title: 'Календарь' },
]
const paths = ['/', profilePath, calendarPath]

const BtnStyle = `p-3 md:my-3 my-2 flex justify-center items-center transition-all duration-150 hover:bg-primary hover:rounded-full active:bg-box`
const Sidebar: React.FC = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const dispatch = useAppDispatch()
	const [open, setOpen] = React.useState<boolean>(JSON.parse(localStorage.getItem(LSKeys.sidebarIsOpen) || 'false'))
	const [isActive, setIsActive] = React.useState<number>(() => {
		if (pathname === profilePath) return 1
		else if (pathname === calendarPath) return 2
		else return 0
	})

	React.useEffect(() => {
		localStorage.setItem(LSKeys.sidebarIsOpen, JSON.stringify(open))
	}, [open])

	const handlerLogout = () => {
		if (window.confirm('Хотите выйти из аккаунта?')) {
			dispatch(userActions.removeUser())
			navigate('/')
		}
	}

	return (
		<aside
			className={`${open ? 'open' : ''} z-10 transition-all w-[90px] flex flex-col h-screen bg-secondary p-5 fixed`}
		>
			{icons.map((el, i) => (
				<Link
					to={paths[i]}
					key={i}
					className={`${isActive === i && 'bg-title rounded-full'} ${BtnStyle}`}
					onClick={() => setIsActive(i)}
					title={el.title}
				>
					{el.icon}
				</Link>
			))}
			{localStorage.getItem(LSKeys.token) ? (
				<button className={BtnStyle + ' absolute bottom-5'} onClick={handlerLogout} title='Выйти' type='button'>
					<LogoutOutlinedIcon sx={{ fontSize: 22, color: '#FFFFFF80' }} />
				</button>
			) : (
				<Link to={authLoginPath} className={BtnStyle + ' absolute bottom-5'} title='Войти'>
					<LoginIcon sx={{ fontSize: 22, color: 'white' }} />
				</Link>
			)}
			<button
				onClick={() => setOpen(!open)}
				className='absolute top-[50%] translate-y-[-50%] -right-6 visible sidebar bg-secondary rounded-md py-4 h-[100px]'
				title='Передвинуть боковую панель'
			>
				<MoreVertOutlinedIcon sx={{ fontSize: 30, color: 'white' }} />
			</button>
		</aside>
	)
}

export { Sidebar }
