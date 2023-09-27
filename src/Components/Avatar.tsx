import { useState } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

type ThemeType = 'dark' | 'light'
interface IAvatarProps {
	popup: boolean
	setPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Avatar: React.FC<IAvatarProps> = ({ popup, setPopup }) => {
	const [theme, setTheme] = useState<ThemeType>('dark')
	return (
		<div className='z-10'>
			<button onClick={() => setPopup(!popup)} className='w-[36px] h-[36px] rounded-full bg-title relative'></button>
			<div
				className={`${
					popup ? 'popup' : ''
				} flex flex-col md:flex-ro gap-2 p-2 mt-3 bg-title rounded-md absolute transition-all`}
			>
				<PersonOutlineOutlinedIcon />
				{theme === 'dark' ? (
					<DarkModeOutlinedIcon onClick={() => setTheme('light')} />
				) : (
					<LightModeOutlinedIcon onClick={() => setTheme('dark')} />
				)}
			</div>
		</div>
	)
}

export default Avatar
