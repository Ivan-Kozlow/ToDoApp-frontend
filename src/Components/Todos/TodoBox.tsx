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
	const filterTaskByTitle = tasks.sort((a, b) => {
		if (a.title.trim().toLowerCase() < b.title.trim().toLowerCase()) return -1
		if (a.title.trim().toLowerCase() > b.title.trim().toLowerCase()) return 1
		return 0
	})

	return (
		<section className='bg-box p-4 w-full max-w-[352px] rounded-md mb-2 overflow-y-auto max-h-[675px]'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='todo-text font-semibold'>
					{title} ({tasks.length})
				</h3>
				<button>
					<img src={FilterIcon} alt='Filter' />
				</button>
			</div>
			{title === EnumTodoTitle.start && <CreateTasks />}
			<section className='flex gap-3 flex-col'>
				{tasks.map(({ title, body, completed, _id }) => (
					<TodoTask key={_id} title={title} body={body} completed={completed} />
				))}
			</section>
		</section>
	)
}

export default TodoBox
