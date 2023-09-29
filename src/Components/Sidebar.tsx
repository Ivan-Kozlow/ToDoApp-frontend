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

const BtnStyle = `p-3 my-4 flex justify-center items-center transition-all duration-150 hover:bg-primary hover:rounded-full active:bg-box`
const Sidebar: React.FC = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const dispatch = useAppDispatch()
	const [open, setOpen] = React.useState<boolean>(JSON.parse(localStorage.getItem('sidebarIsOpen') || 'false'))
	const [isActive, setIsActive] = React.useState<number>(() => {
		if (pathname === profilePath) return 1
		else if (pathname === calendarPath) return 2
		else return 0
	})

	React.useEffect(() => {
		localStorage.setItem('sidebarIsOpen', JSON.stringify(open))
	}, [open])

	const handlerLogout = () => {
		if (window.confirm('Хотите выйти из аккаунта?')) {
			dispatch(userActions.removeUser())
			navigate('/')
		}
	}

	return (
		<aside className={`${open ? 'open' : ''} transition-all w-[90px] flex flex-col h-screen bg-secondary p-5 fixed`}>
			{icons.map((icon, i) => (
				<Link
					to={paths[i]}
					key={i}
					className={`${isActive === i && 'bg-title rounded-full'} ${BtnStyle}`}
					onClick={() => setIsActive(i)}
					title={paths[i]}
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
