import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useDispatch } from 'react-redux'

// utils
import { keyUserGetMe, keyUserUpdate } from 'consts/queryKeys'
import userService from 'services/user.service'
import { TypeAxiosErrorResponse, getErrorMessageForResponse } from 'utils/getErrorMessageOnResponse'
import { userActions } from 'Redux/slices/user/userSlice'

import Loader from 'components/Loader'
import MySnackbar from 'components/MySnackbar'
import { IFormUserFields } from 'pages/AuthPage'
import FormEditUser from './FormEditUser'

const MutateEditUserContainer: React.FC = () => {
	const dispatch = useDispatch()
	const queryClient = useQueryClient()
	const { mutate, error, isLoading, isSuccess } = useMutation<string, TypeAxiosErrorResponse, IFormUserFields>({
		mutationKey: [keyUserUpdate],
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
					message={getErrorMessageForResponse(error) || 'Данные обновились успешно'}
				/>
			)}

			<FormEditUser mutate={mutate} />
		</>
	)
}

export default MutateEditUserContainer
