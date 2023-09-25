import { FC } from 'react'
import TodoTask from './TodoTask'
import { TypeTasks } from 'pages/MainPage'
import FilterIcon from 'assets/FilterIcon.svg'
import CreateTasks from './CreateTasks'

type TypeTodoBox = {
	title: string
	tasks: TypeTasks[]
}

export type TypeProgress = 'start' | 'inProgress' | 'done'

const TodoBox: FC<TypeTodoBox> = ({ title, tasks }) => {
	const filterTaskByTitle = tasks.sort((a, b) => {
		if (a.title.trim().toLowerCase() < b.title.trim().toLowerCase()) return -1
		if (a.title.trim().toLowerCase() > b.title.trim().toLowerCase()) return 1
		return 0
	})
	return (
		<section className='bg-box p-4 w-full max-w-[352px] rounded-md mb-8 overflow-y-auto max-h-[675px]'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='todo-text font-semibold'>
					{title} ({tasks.length})
				</h3>
				<button>
					<img src={FilterIcon} alt='Filter' />
				</button>
			</div>
			{title === 'Todo' ? <CreateTasks /> : ''}
			<ul className='flex gap-3 flex-col'>
				{tasks.map(({ title, subTitle, progress }, i) => (
					<li key={i}>
						<TodoTask title={title} subTitle={subTitle} progress={progress} />
					</li>
				))}
			</ul>
		</section>
	)
}

export default TodoBox
