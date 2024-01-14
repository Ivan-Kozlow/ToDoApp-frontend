import { baseURL } from '../../../axios'
import { Link, useLocation } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'

import { useAppSelector } from 'hooks/redux'
import { calendarPath, profilePath } from 'consts/URL'

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import HeaderPopup from './HeaderPopup'
import Search from '../Search'

type ThemeType = 'dark' | 'light'

const Header: FC<{ full?: boolean }> = ({ full = true }) => {
	const nickname = useAppSelector((state) => state.user.user?.nickname)
	const avatarImg = useAppSelector((state) => state.user.user?.avatar)
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' })
	const [theme, setTheme] = useState<ThemeType>(() => (localStorage.getItem('theme') as ThemeType) || 'dark')

	useEffect(() => {
		localStorage.setItem('theme', theme)
		theme === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}, [theme])

	const { pathname } = useLocation()

	const notifications = (
		<div className='relative'>
			<div className='w-2 h-2 rounded-full bg-[#FFA048] absolute top-[2px] right-[2px]'></div>
			<NotificationsOutlinedIcon sx={{ color: '#1C1D22 dark:white' }} />
		</div>
	)
	const avatar = (
		<button className={'w-[36px] h-[36px] rounded-full dark:bg-title bg-[#2A2B2F] object-cover overflow-hidden'}>
			{avatarImg && <img src={`${baseURL + 'uploads/' + avatarImg}`} alt='Аватар' />}
		</button>
	)

	return (
		<header className='md:py-7 py-4 text-[#FFFFFF80] flex items-center flex-wrap gap-y-3 px-3 max-w-[100vw]'>
			{full && (
				<>
					<h1 className='text-[#1C1D22] dark:text-[#fff] text-lg sm:text-xl font-bold'>
						<span className='hidden md:inline-block'>Добро пожаловать, </span>
						{nickname && ` ${nickname}`}
					</h1>
				</>
			)}
			<div className='flex gap-x-3 md:gap-x-4 items-center ml-auto'>
				{full && <Search />}

				<HeaderPopup buttonClick={notifications}>
					<span className='p-3 block bg-[#FFFFFF] dark:bg-taskBox text-[#1C1D22] dark:text-[#fff]'>
						У вас нет уведомлений!
					</span>
				</HeaderPopup>

				<div className='flex items-center gap-2'>
					<Link to={calendarPath}>
						<CalendarTodayOutlinedIcon sx={{ color: '#1C1D22 dark:white' }} />
					</Link>
					<p className='hidden sm:block font-[600] text-[#1C1D22] dark:text-[#FFFFFF80]'>{date}</p>
				</div>

				<HeaderPopup buttonClick={avatar}>
					<section
						className={
							'flex flex-col md:flex-ro gap-2 p-2 bg-[#FFFFFF] dark:bg-taskBox text-[#1C1D22] dark:text-[#fff]'
						}
					>
						{pathname === profilePath ? (
							<Link to={'/'}>
								<HomeOutlinedIcon />
							</Link>
						) : (
							<Link to={profilePath}>
								<PersonOutlineOutlinedIcon />
							</Link>
						)}

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
