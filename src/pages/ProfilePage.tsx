import { baseURL } from '../../axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import React from 'react'
import style from 'Components/Profile/ProfilePageStyle.module.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeAxiosErrorResponse } from 'utils/getErrorMessageOnResponse'
import userService from 'services/user.service'
import { useAppSelector } from 'hooks/redux'
import { authLoginPath } from 'consts/URL'
import { keyUserAvatarUpdate, keyUserGetMe } from 'consts/queryKeys'
import { LSKeys } from 'consts/localStorKey'

import { Sidebar } from 'Components/Sidebar'
import MutateEditUserContainer from 'Components/Profile/MutateEditUserContainer'
import Loader from 'Components/Loader'
import Header from 'Components/Header/Header'
import { Container } from '@mui/material'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'

const ProfilePage: React.FC = () => {
	const navigate = useNavigate()
	const RefInput = React.useRef<HTMLInputElement | null>(null)
	const user = useAppSelector((state) => state.user.user, shallowEqual)
	const createdDate = (user && new Date(user.createdAt).toLocaleDateString()) || 'Нет информации'
	const updateDate = (user && new Date(user.updatedAt).toLocaleDateString()) || 'Нет информации'
	const queryClient = useQueryClient()
	const { mutate } = useMutation<string, TypeAxiosErrorResponse, Blob | undefined | string>({
		mutationKey: [keyUserAvatarUpdate],
		mutationFn: (avatar) => userService.update({ avatar }),
		onSuccess: () => queryClient.invalidateQueries([keyUserGetMe]),
	})

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
				<span className={style.header__underline + ' dark:bg-[#ffffff1a] bg-[#1c1d227e]'}></span>
				<main className={style.profile + ' dark:text-[#fff] text-[#1C1D22]'}>
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
								onChange={(e) => e.target.files?.length && mutate(e.target.files![0])}
							/>
							<BrushOutlinedIcon
								fontSize='large'
								sx={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-40%, -40%)',
									color: '#fff',
								}}
							/>
						</button>
						{user.avatar && <button onClick={() => mutate(user.avatar)}>Удалить аватар</button>}
					</div>
					<div className={style.right__block}>
						<h2>
							Аккаунт создан: <span className='dark:text-[#ffffff80] text-[#1c1d227e]'>{createdDate}</span>
						</h2>
						<MutateEditUserContainer />
						<h2 className='pb-3'>
							<span className='dark:text-[#ffffff80] text-[#1c1d227e]'>{updateDate}</span> Последнее обновление
							данных
						</h2>
					</div>
				</main>
			</Container>
		</div>
	)
}

export default ProfilePage
