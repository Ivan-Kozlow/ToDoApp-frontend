import React from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

const Notifications: React.FC = () => {
	const [isNotifications, setIsNotifications] = React.useState(true)
	return (
		<div className='relative'>
			<button onClick={() => setIsNotifications(!isNotifications)} className='relative'>
				<NotificationsOutlinedIcon />
				<div className='w-2 h-2 rounded-full bg-[#FFA048] absolute top-[2px] right-[2px]'></div>
			</button>
			<div
				className={`${
					isNotifications ? 'ml-[500px]' : ''
				} transition-all absolute p-3 bg-title rounded-md mt-[18px] min-w-[210px]`}
			>
				У вас нет уведомлений!
			</div>
		</div>
	)
}

export default Notifications
