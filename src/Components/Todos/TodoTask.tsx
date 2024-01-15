import { FC, useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import { getLocalDateNumbers } from 'utils/getLocalDate'
import todoService from 'services/todo.service'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { todoActions } from 'Redux/slices/todo/todoSlice'
import { useAppDispatch } from 'hooks/redux'
import { keyTodoUpdate } from 'consts/queryKeys'

import MoreTodoMenu from 'components/Todos/MorePopover'
import TodoProgressBar from './Form/TodoProgressBar'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import TaskForm from './Form/TaskForm'

type TypeTodoTaskProps = Pick<ITodo, 'title' | 'body' | 'completed' | 'createdAt' | '_id'>

const TodoTask: FC<TypeTodoTaskProps> = ({ title, body, completed, createdAt, _id }) => {
	const [createTask, setCreateTask] = useState(false)
	const dispatch = useAppDispatch()
	const { mutate } = useMutation({
		mutationKey: [keyTodoUpdate, _id],
		mutationFn: () =>
			completed < 2
				? todoService.update(_id, { completed: ++completed as ITodo['completed'] })
				: todoService.delete(_id),
		onSuccess() {
			completed < 2 ? dispatch(todoActions.updateStatus(_id)) : dispatch(todoActions.deleteTask(_id))
		},
	})

	const date = getLocalDateNumbers(createdAt)
	return (
		<article className='dark:bg-taskBox rounded-md p-3 lg:p-5 border-solid border-[2px] border-[#1C1D220F]'>
			{createTask && <TaskForm btnName='Сохранить' isCreate={false} _id={_id} setCreateTask={setCreateTask} />}

			{!createTask && (
				<>
					<div className='flex items-start gap-x-1 justify-between'>
						<h2 className='font-bold text-base truncate' title={title}>
							{title}
						</h2>
						<MoreTodoMenu _id={_id} setCreateTask={setCreateTask} />
					</div>
					{body && (
						<p className='text-sm font-medium text-[#1C1D2280] dark:text-[#FFFFFF80] max-w-[250px] overflow-hidden line-clamp-2'>
							{body}
						</p>
					)}
					<div className='sm:my-4 my-3'>
						<p className='mb-1 text-sm text-[#1C1D2280] dark:text-[#FFFFFF80]'>Статус</p>
						<TodoProgressBar completed={completed} />
					</div>
					<div className='flex items-center justify-between mr-[-2px]'>
						<p className='text-sm dark:text-[#FFFFFF80] px-4 py-1 bg-[#888DA71A] !text-[#989CAA] dark:bg-[#FFFFFF0F] rounded-full'>
							{date}
						</p>
						{completed === 2 ? (
							<button onClick={() => mutate()} title='Удалить'>
								<RemoveCircleOutlineOutlinedIcon />
							</button>
						) : (
							<button onClick={() => mutate()} title='Выполнить'>
								<CheckCircleOutlineIcon />
							</button>
						)}
					</div>
				</>
			)}
		</article>
	)
}

export default TodoTask
