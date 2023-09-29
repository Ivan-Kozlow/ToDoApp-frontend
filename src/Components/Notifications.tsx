import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

interface INotificationsProps {
	isNotifications: boolean
	setIsNotifications: React.Dispatch<React.SetStateAction<boolean>>
}

const Notifications: React.FC<INotificationsProps> = ({ isNotifications, setIsNotifications }) => {
	return (
		<div className='relative z-10'>
			<button onClick={() => setIsNotifications(!isNotifications)} className='relative'>
				<NotificationsOutlinedIcon />
				<div className='w-2 h-2 rounded-full bg-[#FFA048] absolute top-[2px] right-[2px]'></div>
			</button>

			<div
				className={` ${
					isNotifications ? 'popup' : ''
				} transition-all absolute p-3 bg-title rounded-md mt-[18px] min-w-[180px]`}
			>
				У вас нет уведомлений!
			</div>
		</div>
	)
}

export default Notifications
