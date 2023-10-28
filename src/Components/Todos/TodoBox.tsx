import { FC } from 'react'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { EnumTodoTitle } from 'consts/enums'
import FilterIcon from 'assets/FilterIcon.svg'
import CreateTasks from './CreateTasks'
import TodoTask from './TodoTask'
import { useAppDispatch } from 'hooks/redux'
import { todoActions } from 'Redux/slices/todo/todoSlice'

type TypeTodoBox = {
	title: string
	tasks: ITodo[]
}

const TodoBox: FC<TypeTodoBox> = ({ title, tasks }) => {
	const dispatch = useAppDispatch()

	return (
		<section className='bg-box p-4 w-full min-w-[280px] max-w-[352px] overflow-y-auto rounded-md max-h-[675px]'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='todo-text font-semibold'>
					{title} ({tasks.length})
				</h3>
				<button onClick={() => dispatch(todoActions.sortTasks(title))} title='Сортировка'>
					<img src={FilterIcon} alt='Filter' />
				</button>
			</div>
			{title === EnumTodoTitle.start && <CreateTasks />}
			<section className='flex gap-3 flex-col'>
				{tasks.map((task) => (
					<TodoTask key={task._id} {...task} />
				))}
			</section>
		</section>
	)
}

export default TodoBox
