import style from 'components/Profile/ProfilePageStyle.module.scss'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// utils
import { shallowEqual } from 'react-redux'
import { keyUserAvatarUpdate, keyUserGetMe } from 'consts/queryKeys'
import { authLoginPath } from 'consts/URL'
import { LSKeys } from 'consts/localStorKey'
import { useAppSelector } from 'hooks/redux'
import userService from 'services/user.service'
import { baseURL } from '../../axios'
import type { TypeAxiosErrorResponse } from 'utils/getErrorMessageOnResponse'

import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import { Container } from '@mui/material'
import Header from 'components/Header/Header'
import Loader from 'components/Loader'
import { Sidebar } from 'components/Sidebar'
import MutateEditUserContainer from 'components/Profile/MutateEditUserContainer'

const ProfilePage: React.FC = () => {
	const navigate = useNavigate()
	const RefInput = React.useRef<HTMLInputElement | null>(null)
	const user = useAppSelector((state) => state.user.user, shallowEqual)
	const createdDate = (user && new Date(user.createdAt).toLocaleDateString()) || 'Нет информации'
	const updateDate = (user && new Date(user.updatedAt).toLocaleDateString()) || 'Нет информации'
	const queryClient = useQueryClient()
	const { mutate } = useMutation<string, TypeAxiosErrorResponse, Blob | undefined>({
		mutationKey: [keyUserAvatarUpdate],
		mutationFn: (avatar) => userService.update({ avatar }),
		onSuccess: () => queryClient.invalidateQueries([keyUserGetMe]),
	})

	// if (user not auth) return on main page
	React.useEffect(() => {
		if (user?._id) return
		const t = setTimeout(() => {
			!user?._id && navigate('/')
		}, 4000)
		return () => clearTimeout(t)
	}, [user?._id])

	if (!localStorage.getItem(LSKeys.token)) return <Navigate to={authLoginPath} />
	if (!user) return <Loader />
	return (
		<div className='flex'>
			<Sidebar />
			<Container maxWidth={'lg'}>
				<Header full={false} />
				<span className={style.header__underline}></span>
				<main className={style.profile}>
					<div className='flex flex-col gap-6'>
						<button
							className={style.btn_avatar}
							type='button'
							title='Аватар'
							onClick={() => RefInput.current?.click()}
						>
							{user.avatar && (
								<img
									src={`${baseURL + 'uploads/' + user.avatar}`}
									className='text-[0] h-full bg-cover'
									width='130'
									height='130'
									alt='Аватар'
								/>
							)}
							<input
								ref={RefInput}
								type='file'
								accept='image/*'
								name='avatar'
								className='hidden'
								onChange={(e) => mutate(e.target.files![0])}
							/>
							<BrushOutlinedIcon
								fontSize='large'
								sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-40%, -40%)' }}
							/>
						</button>
						{user.avatar && <button onClick={() => mutate(undefined)}>Удалить аватар</button>}
					</div>
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
