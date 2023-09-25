import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { authLoginPath, calendarPath, profilePath } from 'consts/URL'
import { useAppDispatch } from 'hooks/redux'
import { userActions } from 'Redux/slices/user/userSlice'

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

import LoginIcon from '@mui/icons-material/Login'

const icons = [
	<GridViewOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
	<PersonOutlineOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
	<CalendarTodayOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
]
const paths = ['/', profilePath, calendarPath]

const Sidebar: React.FC = () => {
	const BtnStyle = `p-3 my-4 flex justify-center items-center transition-all duration-75 hover:bg-primary hover:rounded-full active:bg-box`
	const [open, setOpen] = React.useState(JSON.parse(localStorage.getItem('isOpen')) || false)
	React.useEffect(() => {
		localStorage.setItem('isOpen', JSON.stringify(open))
	}, [open])
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const [isActive, setIsActive] = React.useState<number>(() => {
		if (pathname === profilePath) return 1
		else if (pathname === calendarPath) return 2
		else return 0
	})

	const handlerLogout = () => {
		if (window.confirm('Хотите выйти из аккаунта?')) {
			dispatch(userActions.removeUser())
			navigate('/')
		}
	}

	return (
		<aside className={`${open ? 'open' : ''} transition-all w-[90px] h-screen bg-secondary p-5 fixed`}>
			{icons.map((icon, i) => (
				<Link
					to={paths[i]}
					title={paths[i]}
					key={i}
					onClick={() => setIsActive(i)}
					className={`${isActive === i && 'bg-title rounded-full'} ${BtnStyle}`}
				>
					{icon}
				</Link>
			))}
			{localStorage.getItem('token') ? (
				<button className={BtnStyle + ' mt-auto'} onClick={handlerLogout} title='Logout' type='button'>
					<LogoutOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />
				</button>
			) : (
				<Link to={authLoginPath} className={BtnStyle + ' mt-auto'} title='Login'>
					<LoginIcon sx={{ fontSize: 22, color: 'white' }} />
				</Link>
			)}
			<button
				onClick={() => setOpen(!open)}
				className='absolute top-[50%] translate-y-[-50%] -right-6 openBtn bg-secondary rounded-md py-4'
			>
				<MoreVertOutlinedIcon sx={{ fontSize: 30, color: 'white' }} />
			</button>
		</aside>
	)
}

export { Sidebar }
