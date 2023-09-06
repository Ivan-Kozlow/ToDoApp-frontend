import React, { FC, useState } from 'react'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { useAppSelector } from 'hooks/redux'
const icons = [
	<GridViewOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
	<PersonOutlineOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
	<CalendarTodayOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />,
]
const Sidebar: FC = () => {
	const [isActive, setIsActive] = useState<number>(0)
	const isAuth = useAppSelector((state) => state.user.isAuth)
	return (
		<div className='w-[90px] min-h-screen flex bg-secondary p-5 relative'>
			<div>
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
					<button className='absolute bottom-0 py-3 px-4 mb-8 flex justify-center items-center transition-all duration-75 hover:bg-title hover:rounded-full'>
						<LogoutOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />
					</button>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export { Sidebar }
