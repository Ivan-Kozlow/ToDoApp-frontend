import { FC } from 'react'

import { ITodo } from 'Redux/slices/todo/typesTodo'
import { todoActions } from 'Redux/slices/todo/todoSlice'
import { useAppDispatch } from 'hooks/redux'
import { EnumTodoTitle } from 'consts/enums'

import FilterIcon from 'assets/FilterIcon.svg'
import CreateTasks from './CreateTasks'
import TodoTask from './TodoTask'

type TypeTodoBox = {
	title: string
	tasks: ITodo[]
}

const TodoBox: FC<TypeTodoBox> = ({ title, tasks }) => {
	const dispatch = useAppDispatch()

	return (
		<section className='dark:bg-box p-4 w-full min-w-[280px] basis-[33%] overflow-y-auto rounded-md max-h-[675px] border-dashed border-[2px] border-[#1C1D2214]'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='dark:text-[#ffffff80] text-[#1C1D2280] text-sm font-semibold'>
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
