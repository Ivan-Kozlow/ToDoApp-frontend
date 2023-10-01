import style from 'components/Profile/ProfilePageStyle.module.scss'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

// utils
import { authLoginPath } from 'consts/URL'
import { useAppSelector } from 'hooks/redux'

import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import { Container } from '@mui/material'
import Header from 'components/Header/Header'
import Loader from 'components/Loader'
import { Sidebar } from 'components/Sidebar'
import MutateEditUserContainer from 'components/Profile/MutateEditUserContainer'

const ProfilePage: React.FC = () => {
	if (!localStorage.getItem('token')) return <Navigate to={authLoginPath} />
	const navigate = useNavigate()
	const user = useAppSelector((state) => state.user.user)
	const createdDate = (user && new Date(user.createdAt).toLocaleDateString()) || 'Нет информации'
	const updateDate = (user && new Date(user.updatedAt).toLocaleDateString()) || 'Нет информации'

	React.useEffect(() => {
		const t = setTimeout(() => {
			!user?._id && navigate('/')
		}, 4000)
		return () => clearTimeout(t)
	}, [user?._id])

	if (!user) return <Loader />
	return (
		<div className='flex'>
			<Sidebar />
			<Container maxWidth={'lg'}>
				<Header full={false} />
				<span className={style.header__underline}></span>
				<main className={style.profile}>
					<button className={style.btn_avatar} type='button' title='Avatar'>
						{/*TODO add avatar -logic */}
						{/* <img src='' width='130' height='130' alt='Avatar' /> */}
						<BrushOutlinedIcon fontSize='large' />
					</button>
					<div className={style.right__block}>
						<h2>
							Аккаунт создан: <span>{createdDate}</span>
						</h2>
						<MutateEditUserContainer />
						<h2 className='pb-3'>
							<span>{updateDate}</span> Последнее обновление данных
						</h2>
					</div>
				</main>
			</Container>
		</div>
	)
}

export default ProfilePage
