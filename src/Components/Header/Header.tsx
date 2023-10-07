import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// utils
import { calendarPath } from 'consts/URL'
import { useAppSelector } from 'hooks/redux'

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { profilePath } from 'consts/URL'
import HeaderPopup from './HeaderPopup'
import Search from '../Search'

type ThemeType = 'dark' | 'light'

const Header: FC<{ full?: boolean }> = ({ full = true }) => {
	const nickname = useAppSelector((state) => state.user.user?.nickname)
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
	const [theme, setTheme] = useState<ThemeType>(() => (localStorage.getItem('theme') as ThemeType) || 'dark')
	useEffect(() => localStorage.setItem('theme', theme), [theme])

	const notifications = (
		<div className='relative'>
			<div className='w-2 h-2 rounded-full bg-[#FFA048] absolute top-[2px] right-[2px]'></div>
			<NotificationsOutlinedIcon />
		</div>
	)

	const avatar = <div className='w-[36px] h-[36px] rounded-full bg-title relative'></div>

	return (
		<header className='md:py-7 py-4 text-[#FFFFFF80] flex items-center flex-wrap gap-y-3'>
			{full && <h1 className='text-[#fff] text-xl font-bold'>Welcome {nickname && ` back, ${nickname}`}</h1>}
			<div className='flex gap-x-2 sm:gap-x-5 items-center ml-auto'>
				{full && <Search />}

				<HeaderPopup buttonClick={notifications}>
					<span className='p-3 block bg-taskBox text-[#fff]'>У вас нет уведомлений!</span>
				</HeaderPopup>

				<div className='flex items-center gap-2'>
					<Link to={calendarPath}>
						<CalendarTodayOutlinedIcon />
					</Link>
					<p className='font-[600]'>{date}</p>
				</div>

				<HeaderPopup buttonClick={avatar}>
					<section className={`flex flex-col md:flex-ro gap-2 p-2 bg-taskBox text-[#fff]`}>
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
					</section>
				</HeaderPopup>
			</div>
		</header>
	)
}

export default Header
