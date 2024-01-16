import { useAppSelector } from 'hooks/redux'
import { EnumTodoTitle } from 'consts/enums'

import TodoBox from './TodoBox'
import CreateTasks from './CreateTasks'

import type { TypeCompleted } from 'types'
const TodosCategories: React.FC = () => {
	const tasks = useAppSelector((s) => s.todo.todos)

	const filterTasksByProgress = (completed: TypeCompleted) =>
		tasks?.length ? tasks?.filter((task) => task.completed === completed) : []

	return tasks?.length ? (
		<>
			<TodoBox title={EnumTodoTitle.start} tasks={filterTasksByProgress(0)} />
			{filterTasksByProgress(1).length ? (
				<TodoBox title={EnumTodoTitle.inProgress} tasks={filterTasksByProgress(1)} />
			) : null}
			{filterTasksByProgress(2).length ? (
				<TodoBox title={EnumTodoTitle.end} tasks={filterTasksByProgress(2)} />
			) : null}
		</>
	) : (
		<div className='flex flex-col w-[35%]'>
			<span className='my-5'>У вас пока нет заметок</span> <CreateTasks />
		</div>
	)
}

export default TodosCategories
