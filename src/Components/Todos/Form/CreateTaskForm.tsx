import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormInput, TypeForm } from 'types/types'
import FormInput from './FormInput'

const CreateTaskForm: React.FC<TypeForm> = ({ createTask, setCreateTask, children }) => {
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

	const {
		register,
		handleSubmit,
		formState: { errors },
		resetField,
		reset,
		setFocus,
	} = useForm<IFormInput>({
		defaultValues: {
			title: '',
			body: '',
		},
	})

	const focusInput = (name: string) => {
		resetField(name)
		setFocus(name)
	}

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data)
		reset()
		setCreateTask(!createTask)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
			<FormInput focusInput={focusInput} require register={register} name={'title'} textColor='title' />
			{errors.title && <p className='mb-1 text-[red]'>{errors.title.message}</p>}

			<FormInput focusInput={focusInput} require={false} register={register} name={'body'} textColor='[#FFFFFF90]' />

			{children}
			<div className='flex justify-between gap-1 items-center'>
				<p className='todo-text px-4 py-2 bg-[#FFFFFF0F] rounded-full'>{date}</p>
				<button type='submit' className={`p-2 bg-[#FFFFFF0F] rounded-md`}>
					Create
				</button>
			</div>
		</form>
	)
}

export default CreateTaskForm
