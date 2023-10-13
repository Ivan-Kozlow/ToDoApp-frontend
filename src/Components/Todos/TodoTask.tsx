import { FC, useState } from 'react'
import { useAppDispatch } from 'hooks/redux'
import { getLocalDateNumbers } from 'utils/getLocalDate'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { todoActions } from 'Redux/slices/todo/todoSlice'

import MoreTodoMenu from 'components/Todos/MorePopover'
import TodoProgressBar from './Form/TodoProgressBar'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import CreateTaskForm from './Form/TaskForm'

type TypeTodoTaskProps = Pick<ITodo, 'title' | 'body' | 'completed' | 'createdAt' | '_id'>

const TodoTask: FC<TypeTodoTaskProps> = ({ title, body, completed, createdAt, _id }) => {
	const [createTask, setCreateTask] = useState(false)
	const dispatch = useAppDispatch()

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
							<button onClick={() => dispatch(todoActions.deleteTask(_id))} title='Удалить'>
								<RemoveCircleOutlineOutlinedIcon />
							</button>
						) : (
							<button onClick={() => dispatch(todoActions.updateStatus(_id))} title='Выполнить'>
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
