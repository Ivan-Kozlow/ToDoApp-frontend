import { useDispatch } from 'react-redux'
import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeAxiosErrorResponse, getErrorMessageForResponse } from 'utils/getErrorMessageOnResponse'
import userService from 'services/user.service'
import { userActions } from 'Redux/slices/user/userSlice'
import { keyUserDataUpdate, keyUserGetMe } from 'consts/queryKeys'

import Loader from 'Components/Loader'
import MySnackbar from 'Components/MySnackbar'
import { IFormUserFields } from 'pages/AuthPage'
import FormEditUser from './FormEditUser'

const MutateEditUserContainer: React.FC = React.memo(() => {
	const dispatch = useDispatch()
	const queryClient = useQueryClient()
	const { mutate, error, isLoading, isSuccess } = useMutation<string, TypeAxiosErrorResponse, IFormUserFields>({
		mutationKey: [keyUserDataUpdate],
		mutationFn: (data) => userService.update(data),
		onSuccess: (avatar) => {
			dispatch(userActions.updateAvatar(avatar))
			queryClient.invalidateQueries([keyUserGetMe])
		},
	})

	return (
		<>
			{isLoading && <Loader />}
			{(isSuccess || error) && (
				<MySnackbar
					slideDirection='right'
					type={isSuccess ? 'success' : 'error'}
					position={{ vertical: 'bottom', horizontal: 'left' }}
					message={getErrorMessageForResponse(error) || 'Данные успешно обновлены'}
				/>
			)}

			<FormEditUser mutate={mutate} />
		</>
	)
})

export default MutateEditUserContainer
