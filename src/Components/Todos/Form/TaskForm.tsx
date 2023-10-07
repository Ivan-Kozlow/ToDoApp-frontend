import { addTask, editTask } from 'Redux/slices/todo/todoSlice'
import { useAppDispatch } from 'hooks/redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormInput, TypeForm } from 'types'
import FormInput from './FormInput'
import { useId } from 'react'

const CreateTaskForm: React.FC<TypeForm> = ({ createTask, create, setCreateTask, children, _id, btnName }) => {
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' })
	const dispatch = useAppDispatch()
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
	const id = useId()

	const focusInput = (name: keyof IFormInput) => {
		resetField(name)
		setFocus(name)
	}

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		dispatch(
			create
				? addTask({
						_id: id,
						title: data.title,
						body: data.body,
						createdAt: date,
						completed: 0,
				  })
				: editTask({
						_id,
						title: data.title,
						body: data.body,
				  })
		)
		reset()
		setCreateTask(!createTask)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
			<FormInput
				focusInput={focusInput}
				require
				register={register}
				name={'title'}
				textColor='fff'
				placeholder='Название'
			/>
			{errors.title && <p className='mb-1 text-[red]'>{errors.title.message}</p>}

			<FormInput
				focusInput={focusInput}
				require={false}
				register={register}
				name={'body'}
				textColor='[#FFFFFF90]'
				placeholder='Примечание'
			/>

			{children}
			<div className='flex justify-between gap-1 mt-2 items-center'>
				<p className='todo-text px-4 py-2 bg-[#FFFFFF0F] rounded-full'>{date}</p>
				<button type='submit' className={`p-2 bg-[#FFFFFF0F] rounded-md`}>
					{btnName}
				</button>
			</div>
		</form>
	)
}

export default CreateTaskForm
