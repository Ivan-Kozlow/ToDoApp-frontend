import { FC } from 'react'
import Avatar from './Avatar'
import { useAppSelector } from 'hooks/redux'

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import Search from './Search'
import Notifications from './Notifications'

const Header: FC<{ full?: boolean }> = ({ full = true }) => {
	const nickname = useAppSelector((state) => state.user.user?.nickname)
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
	return (
		<header className='py-7 text-[#FFFFFF80] flex items-center'>
			{full && <h1 className='text-[#fff] text-xl font-bold'>Welcome {nickname && ` back, ${nickname}`}</h1>}
			<div className='flex gap-x-2 sm:gap-x-5 items-center ml-auto'>
				{full && <Search />}

				<Notifications />
				<div className='flex items-center gap-2'>
					<CalendarTodayOutlinedIcon />
					<p className='font-[600]'>{date}</p>
				</div>
				<button>
					<Avatar />
				</button>
			</div>
		</header>
	)
}

export default Header
