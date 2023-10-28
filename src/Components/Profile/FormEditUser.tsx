import style from './ProfilePageStyle.module.scss'
import { FormProvider, useForm } from 'react-hook-form'
import { UseMutateFunction } from '@tanstack/react-query'
import { TypeAxiosErrorResponse } from 'utils/getErrorMessageOnResponse'

import InputFieldsEditUser from './InputFieldsEditUser'
import FormEditUserButtons from './FormEditUserButtons'
import { IFormUserFields } from 'pages/AuthPage'

interface IFormEditUserProps {
	mutate: UseMutateFunction<string, TypeAxiosErrorResponse, IFormUserFields>
}

const FormEditUser: React.FC<IFormEditUserProps> = ({ mutate }) => {
	const formMethods = useForm<IFormUserFields>({ defaultValues: { nickname: '', email: '', password: '' } })
	const { handleSubmit, reset } = formMethods

	const onSubmit = (data: IFormUserFields) => {
		if (Object.values(data).every((el) => el === '')) {
			alert('Заполните поля, перед отправкой на сервер')
			return false
		}
		if (window.confirm('Вы точно хотите изменить текущие данные?')) reset(), mutate(data)
	}

	return (
		<form className={style.form} onSubmit={handleSubmit(onSubmit)} noValidate>
			<FormProvider {...formMethods}>
				<InputFieldsEditUser />
				<FormEditUserButtons />
			</FormProvider>
		</form>
	)
}

export default FormEditUser
