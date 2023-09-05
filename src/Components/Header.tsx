import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import Avatar from './Avatar'
import TextField from '@mui/material/TextField'

const Header = () => {
	const [search, setSearch] = useState<boolean>(false)
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
	return (
		<div className='py-7 text-[#FFFFFF80] flex justify-between items-center'>
			<h1 className='text-[#fff] text-xl font-bold'>Welcome back, Vincent</h1>
			<div className='flex gap-x-5 items-center'>
				{search ? (
					<>
						<TextField sx={{ color: 'white', p: 0, borderColor: 'white', height: 35 }} size='small' />
						<button>
							<SearchOutlinedIcon onClick={() => setSearch(false)} />
						</button>
					</>
				) : (
					<button>
						<SearchOutlinedIcon onClick={() => setSearch(true)} />
					</button>
				)}
				<button>
					<NotificationsOutlinedIcon />
				</button>
				<div className='flex items-center gap-2'>
					<button>
						<CalendarTodayOutlinedIcon />
					</button>
					<p className='font-[600]'>{date}</p>
				</div>
				<Avatar />
			</div>
		</div>
	)
}

export default Header
