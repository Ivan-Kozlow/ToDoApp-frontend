import { useEffect, useState } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { Link } from 'react-router-dom'
import { profilePath } from 'consts/URL'

type ThemeType = 'dark' | 'light'
interface IAvatarProps {
	popup: boolean
	setPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const Avatar: React.FC<IAvatarProps> = ({ popup, setPopup }) => {
	const [theme, setTheme] = useState<ThemeType>((localStorage.getItem('theme') as 'light') || 'dark')
	useEffect(() => localStorage.setItem('theme', theme), [theme])

	return (
		<div className='z-10'>
			<button onClick={() => setPopup(!popup)} className='w-[36px] h-[36px] rounded-full bg-title relative'></button>
			<div
				className={`${
					popup ? 'popup' : ''
				} flex flex-col md:flex-ro gap-2 p-2 mt-3 bg-title rounded-md absolute transition-all`}
			>
				<Link to={profilePath}>
					<PersonOutlineOutlinedIcon />
				</Link>
				{theme === 'dark' ? (
					<button onClick={() => setTheme('light')}>
						<DarkModeOutlinedIcon />
					</button>
				) : (
					<button onClick={() => setTheme('dark')}>
						<LightModeOutlinedIcon />
					</button>
				)}
			</div>
		</div>
	)
}

export default Avatar
