import { FC, useState } from 'react'
import Avatar from './Avatar'
import { useAppSelector } from 'hooks/redux'

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import TextField from '@mui/material/TextField'

const Header: FC = () => {
	const [search, setSearch] = useState<boolean>(false)
	const nickname = useAppSelector((state) => state.user.user?.nickname)
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

	return (
		<div className='py-7 text-[#FFFFFF80] flex justify-between items-center'>
			<h1 className='text-[#fff] text-xl font-bold'>Welcome {nickname ? ` back, ${nickname}` : ''}</h1>
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
					<CalendarTodayOutlinedIcon />
					<p className='font-[600]'>{date}</p>
				</div>
				<button>
					<Avatar />
				</button>
			</div>
		</div>
	)
}

export default Header
