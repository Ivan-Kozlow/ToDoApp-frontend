import { useState } from 'react'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import TextField from '@mui/material/TextField'
import Avatar from './Avatar'
import { useAppSelector } from 'hooks/redux'

const Header = () => {
	const [search, setSearch] = useState<boolean>(false)
	const nickname = useAppSelector((state) => state.user.user?.nickname)

	return (
		<div className='py-7 text-title flex justify-between items-center'>
			<h1 className='text-[#fff] text-xl font-bold'>Welcome{nickname ? ` back, ${nickname}` : ''}</h1>
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
