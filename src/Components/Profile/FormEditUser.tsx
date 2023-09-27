import style from './ProfilePageStyle.module.scss'
import { FormProvider, useForm } from 'react-hook-form'
import { UseMutateFunction } from '@tanstack/react-query'
import { TypeAxiosErrorResponse } from 'utils/getErrorMessageOnResponse'

import InputFieldsEditUser from './InputFieldsEditUser'
import FormEditUserButtons from './FormEditUserButtons'
import { IFormFields } from 'pages/AuthPage'

interface IFormEditUserProps {
	mutate: UseMutateFunction<{ message: string }, TypeAxiosErrorResponse, IFormFields>
}

const FormEditUser: React.FC<IFormEditUserProps> = ({ mutate }) => {
	const formMethods = useForm<IFormFields>()
	const { handleSubmit, reset } = formMethods
	const onSubmit = (data: IFormFields) => {
		if (Object.values(data).every((el) => el === '')) {
			alert('Заполните поля, перед отправкой на сервер')
			return false
		}
		if (window.confirm('Вы точно хотите изменить текущие данные?')) reset(), mutate(data)
	}

	return (
		<FormProvider {...formMethods}>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)} noValidate>
				<InputFieldsEditUser />
				<FormEditUserButtons />
			</form>
		</FormProvider>
	)
}

export default FormEditUser
