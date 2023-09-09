import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { authLoginPath, calendarPath, profilePath } from 'consts/URL'
import { useAppDispatch } from 'hooks/redux'
import { userActions } from 'Redux/slices/user/userSlice'

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import LoginIcon from '@mui/icons-material/Login'

const icons = [
	<GridViewOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
	<PersonOutlineOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
	<CalendarTodayOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
]
const paths = ['/', profilePath, calendarPath]

const BtnStyle = `p-3 my-4 flex justify-center items-center transition-all duration-75 hover:bg-primary hover:rounded-full active:bg-box`
const Sidebar: React.FC = () => {
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()
	const [isActive, setIsActive] = React.useState<number>(() => {
		if (pathname === profilePath) return 1
		else if (pathname === calendarPath) return 2
		else return 0
	})

	return (
		<aside className='w-[90px] min-h-screen flex flex-col bg-secondary p-5'>
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
				<button
					className={BtnStyle + ' mt-auto'}
					onClick={() => dispatch(userActions.removeUser())}
					title='Logout'
					type='button'
				>
					<LogoutOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />
				</button>
			) : (
				<Link to={authLoginPath} className={BtnStyle + ' mt-auto'} title='Login'>
					<LoginIcon sx={{ fontSize: 22, color: 'white' }} />
				</Link>
			)}
		</aside>
	)
}

export { Sidebar }
