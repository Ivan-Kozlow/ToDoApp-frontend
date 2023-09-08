import React, { useState } from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

const Notifications = () => {
	const [isNotifications, setIsNotifications] = useState(true)

	return (
		<div className='relative'>
			<button onClick={() => setIsNotifications(!isNotifications)} className='relative'>
				<NotificationsOutlinedIcon />
				<div className='w-2 h-2 rounded-full bg-[#FFA048] absolute top-[2px] right-[2px]'></div>
			</button>
			<div
				className={`${
					isNotifications ? 'popup' : ''
				} transition-all absolute p-3 bg-title rounded-md mt-[18px] min-w-[180px]`}
			>
				У вас нет уведомлений!
			</div>
		</div>
	)
}

export default Notifications
