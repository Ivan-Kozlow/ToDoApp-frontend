import { FC } from 'react'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { EnumTodoTitle } from 'consts/enums'
import FilterIcon from 'assets/FilterIcon.svg'
import CreateTasks from './CreateTasks'
import TodoTask from './TodoTask'

type TypeTodoBox = {
	title: string
	tasks: ITodo[]
}

const TodoBox: FC<TypeTodoBox> = ({ title, tasks }) => {
	return (
		<section className='bg-box p-4 w-full max-w-[352px] rounded-md overflow-y-auto max-h-[675px]'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='todo-text font-semibold'>
					{title} ({tasks.length})
				</h3>
				<button title='Сортировка'>
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
