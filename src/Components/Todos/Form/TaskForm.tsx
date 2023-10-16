import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { todoActions } from 'Redux/slices/todo/todoSlice'
import { keyTodoCreate, keyTodoGetAll, keyTodoUpdate } from 'consts/queryKeys'
import { useAppDispatch } from 'hooks/redux'
import todoService from 'services/todo.service'
import { TypeCreateTodo } from 'services/types'
import { getLocalDateNumbers } from 'utils/getLocalDate'
import { IFormInput, TypeForm } from 'types'
import { TypeAxiosErrorResponse, getErrorMessageForResponse } from 'utils/getErrorMessageOnResponse'
import MySnackbar from 'components/MySnackbar'
import FormInput from './FormInput'

const CreateTaskForm: React.FC<TypeForm> = ({ createTask, isCreate, setCreateTask, children, btnName, _id }) => {
	const dispatch = useAppDispatch()
	const formMethods = useForm<IFormInput>({ defaultValues: { title: '', body: '' } })
	const { handleSubmit, reset, watch } = formMethods
	const { mutate, isError, error, isLoading } = useMutation<ITodo, TypeAxiosErrorResponse, TypeCreateTodo>({
		mutationKey: [keyTodoCreate],
		mutationFn: (data) => todoService.create(data),
		onSuccess: (data) => {
			dispatch(todoActions.addTask(data))
			reset()
			setCreateTask(!createTask)
		},
	})
	const queryClient = useQueryClient()
	const { mutate: mutateUpdateData } = useMutation<{ message: string }, TypeAxiosErrorResponse, IFormInput>({
		mutationKey: [keyTodoUpdate, _id],
		mutationFn: (data) => todoService.update(_id as ITodo['_id'], data),
		onSuccess: (_, data) => {
			queryClient.invalidateQueries([keyTodoGetAll])
			dispatch(todoActions.editTask(data))
			reset()
			setCreateTask(!createTask)
		},
	})

	const fieldsIsEmpty = Object.values(watch()).every((el: string) => el.trim() === '')
	const onSubmit: SubmitHandler<IFormInput> = (data) => (isCreate ? mutate(data) : mutateUpdateData(data))

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
			<FormProvider {...formMethods}>
				<FormInput require name={'title'} textColor='fff' placeholder='Название' />
				<FormInput name={'body'} textColor='[#FFFFFF90]' placeholder='Примечание' />
			</FormProvider>

			{isError && <MySnackbar message={getErrorMessageForResponse(error)} type={'error'} />}

			{children}
			<div className='flex justify-between gap-1 mt-2 items-center'>
				<p className='todo-text px-4 py-2 bg-[#FFFFFF0F] rounded-full'>{getLocalDateNumbers()}</p>
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

export default CreateTaskForm
