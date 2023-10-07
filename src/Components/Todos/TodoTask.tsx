import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import MorePopover from 'components/Todos/MorePopover'
import { FC, useState } from 'react'
import CreateTaskForm from './Form/TaskForm'
import { useAppDispatch } from 'hooks/redux'
import TodoProgressBar from './Form/TodoProgressBar'
import { deleteTask, updateStatus } from 'Redux/slices/todo/todoSlice'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'

type TypeTodoTaskProps = Pick<ITodo, 'title' | 'body' | 'completed' | 'createdAt' | '_id'>

const TodoTask: FC<TypeTodoTaskProps> = ({ title, body, completed, createdAt, _id }) => {
	const [createTask, setCreateTask] = useState(false)
	const dispatch = useAppDispatch()

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
						<MorePopover _id={_id} setCreateTask={setCreateTask} createTask={createTask} />
					</div>
					{body && <p className='todo-text max-w-[250px] truncate'>{body}</p>}
					<div className='my-4'>
						<p className='mb-1 text-sm text-[#FFFFFF80]'>Прогресс</p>
						<TodoProgressBar completed={completed} />
					</div>
					<div className='flex items-center justify-between'>
						<p className='todo-text px-4 py-2 font-semibold bg-[#FFFFFF0F] rounded-full'>{createdAt}</p>
						{completed === 2 ? (
							<button onClick={() => dispatch(deleteTask({ _id }))} title='Удалить'>
								<RemoveCircleOutlineOutlinedIcon />
							</button>
						) : (
							<button onClick={() => dispatch(updateStatus({ _id }))} title='Выполнить'>
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
