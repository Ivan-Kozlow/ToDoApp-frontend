import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { todoActions } from 'Redux/slices/todo/todoSlice'
import { keyTodoCreate } from 'consts/queryKeys'
import { useAppDispatch } from 'hooks/redux'
import todoService from 'services/todo.service'
import { TypeCreateTodo } from 'services/types'
import { IFormInput, TypeForm } from 'types'
import { TypeAxiosErrorResponse, getErrorMessageForResponse } from 'utils/getErrorMessageOnResponse'
import MySnackbar from 'components/MySnackbar'
import FormInput from './FormInput'

const TaskForm: React.FC<TypeForm> = ({ createTask, create, setCreateTask, children, btnName }) => {
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' })
	const dispatch = useAppDispatch()
	const formMethods = useForm<IFormInput>()
	const { handleSubmit, reset } = formMethods
	const { mutate, isError, error } = useMutation<ITodo, TypeAxiosErrorResponse, TypeCreateTodo>({
		mutationKey: [keyTodoCreate],
		mutationFn: (data) => todoService.create(data),
		onSuccess: (data) => {
			dispatch(create ? todoActions.addTask(data) : todoActions.editTask(data))
			console.log(data._id);
			
			reset()
			setCreateTask(!createTask)
		},
	})

	//FIXME rerender on click on clear btn
	//FIXME deleting token, when often click btn 'Сбросить'

	const onSubmit: SubmitHandler<TypeCreateTodo> = (data) => mutate(data)

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
				<button type='submit' className={`p-2 bg-[#FFFFFF0F] rounded-md`}>
					{btnName}
				</button>
			</div>
		</form>
	)
}

export default TaskForm
