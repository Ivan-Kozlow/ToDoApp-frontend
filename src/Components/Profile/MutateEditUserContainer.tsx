import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'

// utils
import { keyUserGetMe, keyUserUpdate } from 'consts/queryKeys'
import userService from 'services/user.service'
import { TypeAxiosErrorResponse, getErrorMessageForResponse } from 'utils/getErrorMessageOnResponse'

import Loader from 'components/Loader'
import MySnackbar from 'components/MySnackbar'
import { IFormFields } from 'pages/AuthPage'
import FormEditUser from './FormEditUser'

const MutateEditUserContainer: React.FC = () => {
	const queryClient = useQueryClient()
	const { mutate, error, isLoading, isSuccess } = useMutation<
		{ message: string },
		TypeAxiosErrorResponse,
		IFormFields
	>({
		mutationKey: [keyUserUpdate],
		mutationFn: (data: IFormFields) => userService.update(data),
		onSuccess: () => queryClient.invalidateQueries([keyUserGetMe]),
	})

	return (
		<>
			{isLoading && <Loader />}
			{(isSuccess || error) && (
				<MySnackbar
					slideDirection='right'
					type={isSuccess ? 'success' : 'error'}
					position={{ vertical: 'bottom', horizontal: 'left' }}
					message={getErrorMessageForResponse(error) || 'Success update'}
				/>
			)}

			<FormEditUser mutate={mutate} />
		</>
	)
}

export default MutateEditUserContainer
