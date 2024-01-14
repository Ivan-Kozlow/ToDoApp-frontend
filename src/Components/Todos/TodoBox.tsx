import { FC, useEffect, useState } from 'react'
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
	const [sortedByTitile, setSortedByTitile] = useState(false)

	const sortTodos = () => {
		dispatch(todoActions.sortTasks(sortedByTitile))
		setSortedByTitile((p) => !p)
	}

	return (
		<section className='dark:bg-box p-4 w-full min-w-[280px] max-w-[352px] overflow-y-auto rounded-md max-h-[675px] border-dashed border-[2px] border-[#1C1D2214]'>
			<div className='flex justify-between items-center pb-4'>
				<h3 className='dark:text-[#ffffff80] text-[#1C1D2280] text-sm font-semibold'>
					{title} ({tasks.length})
				</h3>
				<button onClick={sortTodos} title='Сортировка'>
					<svg
						className='dark:fill-[#F8F8F8] fill-taskBox'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M7.97899 2.673C7.91098 2.47651 7.78342 2.3061 7.61404 2.18549C7.44467 2.06488 7.24191 2.00007 7.03399 2.00007C6.82606 2.00007 6.6233 2.06488 6.45393 2.18549C6.28456 2.3061 6.15699 2.47651 6.08899 2.673L3.29599 10.742C3.25201 10.8663 3.23307 10.9982 3.24025 11.1299C3.24743 11.2616 3.2806 11.3905 3.33783 11.5094C3.39507 11.6282 3.47524 11.7345 3.57374 11.8222C3.67224 11.9099 3.78712 11.9773 3.91176 12.0204C4.0364 12.0636 4.16835 12.0816 4.29999 12.0735C4.43164 12.0655 4.56038 12.0314 4.67882 11.9734C4.79726 11.9153 4.90304 11.8344 4.99008 11.7354C5.07712 11.6363 5.1437 11.5209 5.18599 11.396L5.59699 10.206H8.46999L8.88199 11.396C8.97002 11.6449 9.15294 11.8489 9.39082 11.9635C9.62871 12.0781 9.90225 12.094 10.1518 12.0076C10.4013 11.9213 10.6066 11.7397 10.7227 11.5026C10.8389 11.2655 10.8566 10.9921 10.772 10.742L7.97899 2.672V2.673ZM6.28899 8.207L7.03399 6.057L7.77799 8.207H6.28899ZM3.74999 14C3.74999 13.7348 3.85534 13.4804 4.04288 13.2929C4.23042 13.1054 4.48477 13 4.74999 13H9.99999C10.1857 13 10.3677 13.0517 10.5257 13.1493C10.6837 13.247 10.8114 13.3867 10.8944 13.5528C10.9775 13.7189 11.0126 13.9048 10.9959 14.0898C10.9793 14.2748 10.9114 14.4514 10.8 14.6L6.74999 20H9.99999C10.2652 20 10.5196 20.1054 10.7071 20.2929C10.8946 20.4804 11 20.7348 11 21C11 21.2652 10.8946 21.5196 10.7071 21.7071C10.5196 21.8946 10.2652 22 9.99999 22H4.74999C4.56428 22 4.38223 21.9483 4.22426 21.8507C4.06628 21.753 3.93861 21.6133 3.85556 21.4472C3.77251 21.2811 3.73735 21.0952 3.75403 20.9102C3.77071 20.7252 3.83856 20.5486 3.94999 20.4L7.99999 15H4.74999C4.48477 15 4.23042 14.8946 4.04288 14.7071C3.85534 14.5196 3.74999 14.2652 3.74999 14ZM17.5 2C17.7652 2 18.0196 2.10536 18.2071 2.29289C18.3946 2.48043 18.5 2.73478 18.5 3V18.586L20.293 16.793C20.4816 16.6108 20.7342 16.51 20.9964 16.5123C21.2586 16.5146 21.5094 16.6198 21.6948 16.8052C21.8802 16.9906 21.9854 17.2414 21.9877 17.5036C21.9899 17.7658 21.8891 18.0184 21.707 18.207L18.207 21.707C18.0195 21.8945 17.7652 21.9998 17.5 21.9998C17.2348 21.9998 16.9805 21.8945 16.793 21.707L13.293 18.207C13.1108 18.0184 13.01 17.7658 13.0123 17.5036C13.0146 17.2414 13.1198 16.9906 13.3052 16.8052C13.4906 16.6198 13.7414 16.5146 14.0036 16.5123C14.2658 16.51 14.5184 16.6108 14.707 16.793L16.5 18.586V3C16.5 2.73478 16.6053 2.48043 16.7929 2.29289C16.9804 2.10536 17.2348 2 17.5 2Z' />
					</svg>
					{/* <img src={FilterIcon} alt='Filter' /> */}
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
