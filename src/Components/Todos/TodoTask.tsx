import { FC, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { todoActions } from 'Redux/slices/todo/todoSlice'
import { useAppDispatch } from 'hooks/redux'
import { getLocalDateNumbers } from 'utils/getLocalDate'
import { keyTodoUpdate } from 'consts/queryKeys'
import todoService from 'services/todo.service'

import MoreTodoMenu from 'components/Todos/MorePopover'
import TodoProgressBar from './Form/TodoProgressBar'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import CreateTaskForm from './Form/TaskForm'

type TypeTodoTaskProps = Pick<ITodo, 'title' | 'body' | 'completed' | 'createdAt' | '_id'>

const TodoTask: FC<TypeTodoTaskProps> = ({ title, body, completed, createdAt, _id }) => {
	const [createTask, setCreateTask] = useState(false)
	const dispatch = useAppDispatch()
	const { mutate } = useMutation({
		mutationKey: [keyTodoUpdate],
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
		<article className='bg-taskBox rounded-md p-5'>
			{createTask && (
				<CreateTaskForm
					btnName='Сохранить'
					create={false}
					_id={_id}
					createTask={createTask}
					setCreateTask={setCreateTask}
				/>
			)}

			{!createTask && (
				<>
					<div className='flex items-start gap-x-1 justify-between mb-1'>
						{/* TODO add ellipse on 2 string */}
						<h2 className='font-bold text-base truncate' title={title}>
							{title}
						</h2>
						<MoreTodoMenu _id={_id} setCreateTask={setCreateTask} createTask={createTask} />
					</div>
					{body && <p className='todo-text max-w-[250px] truncate'>{body}</p>}
					<div className='my-4'>
						<p className='mb-1 text-sm text-[#FFFFFF80]'>Прогресс</p>
						<TodoProgressBar completed={completed} />
					</div>
					<div className='flex items-center justify-between'>
						<p className='todo-text px-4 py-2 bg-[#FFFFFF0F] rounded-full'>{date}</p>
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
