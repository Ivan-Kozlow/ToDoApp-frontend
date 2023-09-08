import React, { useState } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

type ThemeType = 'dark' | 'light'

const Avatar = () => {
	const [theme, setTheme] = useState<ThemeType>('dark')
	const [popup, setPopup] = useState(true)
	return (
		<>
			<div onClick={() => setPopup(!popup)} className='w-[36px] h-[36px] rounded-full bg-title relative'></div>
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
		</>
	)
}

export default Avatar
