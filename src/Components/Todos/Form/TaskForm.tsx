import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { getLocalDateNumbers } from 'utils/getLocalDate'
import { TypeAxiosErrorResponse, getErrorMessageForResponse } from 'utils/getErrorMessageOnResponse'
import { TypeCreateTodo } from 'services/types'
import todoService from 'services/todo.service'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { todoActions } from 'Redux/slices/todo/todoSlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { keyTodoCreate, keyTodoGetAll, keyTodoUpdate } from 'consts/queryKeys'

import { IFormInput, TypeForm } from 'types'
import MySnackbar from 'components/MySnackbar'
import FormInput from './FormInput'

const TaskForm: React.FC<TypeForm> = ({ createTask, isCreate, setCreateTask, children, btnName, _id }) => {
	const dispatch = useAppDispatch()

	const todos = useAppSelector((s) => s.todo.todos)
	const todo = todos?.find((t) => t._id === _id)

	const formMethods = useForm<IFormInput>({ defaultValues: { title: todo?.title || '', body: todo?.body || '' } })
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
				<FormInput name={'body'} textColor='[#FFFFFF90]' placeholder='Описание' />
			</FormProvider>

			{isError && (
				<MySnackbar message={getErrorMessageForResponse(error) || 'Не удалось создать заметку'} type={'error'} />
			)}

			{children}
			<div className='flex justify-between gap-1 sm:mt-2 mt-1 items-center'>
				<p className='text-sm px-4 py-1 dark:text-[#FFFFFF80] !text-[#989CAA] bg-[#888DA71A] dark:bg-[#FFFFFF0F] rounded-full'>
					{getLocalDateNumbers()}
				</p>
				<button
					type={fieldsIsEmpty ? 'button' : 'submit'}
					className={`p-2 bg-[#888DA71A] text-[#1C1D22] dark:text-[#fff] dark:bg-[#FFFFFF0F] rounded-md`}
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

// TODO При отмене редактирования сбрасывается прогресс до 0 (0, 1 или 2 - выполнено)
// TODO Ширина блока (Board view) не растягивается при горизонтальном скроле на мобилках
