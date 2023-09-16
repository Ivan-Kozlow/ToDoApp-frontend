import { FC, useEffect, useState } from 'react'
import Avatar from './Avatar'
import { useAppSelector } from 'hooks/redux'

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import Search from './Search'
import Notifications from './Notifications'

const Header: FC<{ full?: boolean }> = ({ full = true }) => {
	const nickname = useAppSelector((state) => state.user.user?.nickname)
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
	const [isNotifications, setIsNotifications] = useState(true)
	const [popup, setPopup] = useState(true)

	// useEffect(() => {
	// 	!isNotifications ? setPopup(true) : setPopup(false)
	// 	popup ? setIsNotifications(true) : null
	// }, [popup, isNotifications])

	return (
		<header className='py-7 text-[#FFFFFF80] flex items-center flex-wrap gap-y-3'>
			{full && <h1 className='text-[#fff] text-xl font-bold'>Welcome {nickname && ` back, ${nickname}`}</h1>}
			<div className='flex gap-x-2 sm:gap-x-5 items-center ml-auto'>
				{full && <Search />}

				<Notifications isNotifications={isNotifications} setIsNotifications={setIsNotifications} />
				<div className='flex items-center gap-2'>
					<button>
						<CalendarTodayOutlinedIcon />
					</button>
					<p className='font-[600]'>{date}</p>
				</div>
				<Avatar popup={popup} setPopup={setPopup} />
			</div>
		</header>
	)
}

export default Header
