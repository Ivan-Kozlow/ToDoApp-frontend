import { FC } from 'react'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha'
import TodoTask from './TodoTask'
import { TypeTasks } from 'pages/MainPage'

type TypeTodoBox = {
	title: string
	tasks: TypeTasks[]
}

export type TypeProgress = 'start' | 'inProgress' | 'done'

const TodoBox: FC<TypeTodoBox> = ({ title, tasks }) => {
	const count = tasks.length
	return (
		<section className='bg-box p-4 w-full max-w-[352px] rounded-md mb-8'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='todo-text font-semibold'>
					{title} ({count})
				</h3>
				<button>
					<SortByAlphaIcon />
				</button>
			</div>
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
