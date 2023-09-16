import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from 'hooks/redux'
import { userActions } from 'Redux/slices/user/userSlice'

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

import { useAppSelector } from 'hooks/redux'

import LoginIcon from '@mui/icons-material/Login'

const icons = [
	<GridViewOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
	<PersonOutlineOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
	<CalendarTodayOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
]

const Sidebar: FC = () => {
	const [isActive, setIsActive] = useState<number>(0)
	const [isAuth, setIsAuth] = useState(false)
	const [open, setOpen] = useState(true)
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
		<div className={`${open ? 'open' : ''} transition-all w-[90px] h-screen bg-secondary p-5 fixed`}>
			{icons.map((icon, i) => (
				<button
					key={i}
					onClick={() => setIsActive(i)}
					className={`${
						isActive === i ? `bg-title rounded-full ` : ''
					} py-3 px-3 my-8 flex justify-center items-center transition-all duration-75 hover:bg-title hover:rounded-full`}
				>
					{icon}
				</button>
			))}
			{isAuth ? (
				<button
					onClick={() => handlerLogout()}
					className='absolute bottom-0 py-3 px-3 mb-8 flex justify-center items-center transition-all duration-75 hover:bg-title hover:rounded-full'
				>
					<LogoutOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />
				</button>
			) : (
				<button
					onClick={() => navigate('/auth/login')}
					className='absolute bottom-0 py-3 px-3 mb-8 flex justify-center items-center transition-all duration-75 hover:bg-title hover:rounded-full'
				>
					<LoginIcon sx={{ fontSize: 22, color: 'white' }} />
				</button>
			)}
			<button
				onClick={() => setOpen(!open)}
				className='absolute top-[50%] translate-y-[-50%] -right-6 bg-secondary rounded-md py-4'
			>
				<MoreVertOutlinedIcon sx={{ fontSize: 30, color: 'white' }} />
			</button>
		</div>
	)
}

export { Sidebar }
