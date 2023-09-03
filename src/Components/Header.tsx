import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import Avatar from './Avatar'
import TextField from '@mui/material/TextField'

const Header = () => {
	const [search, setSearch] = useState<boolean>(false)
	return (
		<div className='py-7 text-title flex justify-between items-center'>
			<h1 className='text-[#fff] text-xl font-bold'>Welcome back, Vincent</h1>
			<div className='flex gap-x-5 items-center'>
				{search ? (
					<>
						<TextField sx={{ color: 'white', p: 0, borderColor: 'white' }} size='small' />
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
				<button>
					<CalendarTodayOutlinedIcon />
				</button>
				<p className='font-[600]'>19 May 2022</p>
				<Avatar />
			</div>
		</div>
	)
}

export default Header
