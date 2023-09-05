import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

const Sidebar: FC = () => {
	const [isActive, setIsActive] = useState(0)
	const [isAuth, setIsAuth] = useState(false)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	React.useLayoutEffect(() => {
		setIsAuth(!!localStorage.getItem('token'))
	}, [])

	const handlerLogout = () => {
		dispatch(userActions.removeUser())
		setIsAuth(false)
	}

	return (
		<div className='w-[90px] min-h-screen bg-secondary p-5 relative'>
			{icons.map((icon, i) => (
				<button
					key={i}
					onClick={() => setIsActive(i)}
					className={`${
						isActive === i ? `bg-title rounded-full ` : ''
					} py-3 px-4 my-8 flex justify-center items-center transition-all duration-75 hover:bg-title hover:rounded-full`}
				>
					{icon}
				</button>
			))}
			{isAuth ? (
				<button
					onClick={() => handlerLogout()}
					className='absolute bottom-0 py-3 px-4 mb-8 flex justify-center items-center transition-all duration-75 hover:bg-title hover:rounded-full'
				>
					<LogoutOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />
				</button>
			) : (
				<button
					onClick={() => navigate('/auth/login')}
					className='absolute bottom-0 py-3 px-4 mb-8 flex justify-center items-center transition-all duration-75 hover:bg-title hover:rounded-full'
				>
					<LoginIcon sx={{ fontSize: 22, color: 'white' }} />
				</button>
			)}
		</div>
	)
}

export { Sidebar }
