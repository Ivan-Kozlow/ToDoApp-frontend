import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { todoActions } from 'Redux/slices/todo/todoSlice'
import { keyTodoCreate } from 'consts/queryKeys'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import todoService from 'services/todo.service'
import { TypeCreateTodo } from 'services/types'
import { getLocalDateNumbers } from 'utils/getLocalDate'
import { IFormInput, TypeForm } from 'types'
import { TypeAxiosErrorResponse, getErrorMessageForResponse } from 'utils/getErrorMessageOnResponse'
import MySnackbar from 'components/MySnackbar'
import FormInput from './FormInput'

const TaskForm: React.FC<TypeForm> = ({ createTask, create, setCreateTask, children, btnName, _id }) => {
	const tasks = useAppSelector((s) => s.todo.todos)
	const todo = tasks?.find((task) => task._id === _id)

	const dispatch = useAppDispatch()
	const formMethods = useForm<IFormInput>({ defaultValues: { title: '', body: '' } })
	const { handleSubmit, reset, watch } = formMethods
	const { mutate, isError, error, isLoading } = useMutation<ITodo, TypeAxiosErrorResponse, TypeCreateTodo>({
		mutationKey: [keyTodoCreate],
		mutationFn: (data) => todoService.create(data),
		onSuccess: (data) => {
			dispatch(create ? todoActions.addTask(data) : todoActions.editTask(data))
			reset()
			setCreateTask(!createTask)
		},
	})

	const fieldsIsEmpty = Object.values(watch()).every((el) => el === '')

	const onSubmit: SubmitHandler<TypeCreateTodo> = (data) => mutate(data)
	const date = getLocalDateNumbers()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
			<FormProvider {...formMethods}>
				<FormInput require name={'title'} textColor='fff' placeholder='Название' />
				<FormInput name={'body'} textColor='[#FFFFFF90]' placeholder='Описание' />
			</FormProvider>

			{isError && <MySnackbar message={getErrorMessageForResponse(error)} type={'error'} />}

			{children}
			<div className='flex justify-between gap-1 mt-2 items-center'>
				<p className='todo-text px-4 py-2 bg-[#FFFFFF0F] rounded-full'>{date}</p>
				<button
					type={fieldsIsEmpty ? 'button' : 'submit'}
					className={`p-2 bg-[#FFFFFF0F] rounded-md`}
					onClick={() => fieldsIsEmpty && setCreateTask((val) => !val)}
					disabled={isLoading}
					aria-disabled={isLoading}
				>
					{fieldsIsEmpty ? 'Отменить' : btnName}
				</button>
			</div>
		</form>
	)
}

export default TaskForm