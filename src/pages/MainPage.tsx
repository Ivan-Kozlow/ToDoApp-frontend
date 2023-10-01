import { useAppSelector } from 'hooks/redux'
import { TypeCompleted } from 'types/types'
import { EnumTodoTitle } from 'consts/enums'
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined'
import Header from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import CreateTasks from 'components/Todos/CreateTasks'
import TodoBox from 'components/Todos/TodoBox'

const MainPage: React.FC = () => {
	const tasks = useAppSelector((s) => s.todo.todos)
	// TODO create array of tasks completed, which in redux
	// and map this new array using filterTasksByProgress()
	const filterTasksByProgress = (completed: TypeCompleted) =>
		tasks?.length ? tasks?.filter((task) => task.completed === completed) : []

	return (
		<div className='flex text-[#fff]'>
			<Sidebar />
			<div className='w-full max-w-6xl mx-auto px-4 pb-4'>
				<Header />
				<main className='overflow-auto h-[90vh]'>
					<section className='border-view-border mb-5'>
						<div className='border-view border-view-border-2 mb-[-2px]'>
							<DnsOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />
							<span>Board view</span>
						</div>
					</section>
					<div className='flex gap-5'>
						{tasks?.length ? (
							<>
								<TodoBox title={EnumTodoTitle.start} tasks={filterTasksByProgress(0)} />
								<TodoBox title={EnumTodoTitle.inProgress} tasks={filterTasksByProgress(1)} />
								<TodoBox title={EnumTodoTitle.end} tasks={filterTasksByProgress(2)} />
							</>
						) : (
							<div className='flex flex-col w-[25%]'>
								<span className='my-5'>У вас пока нет заметок</span> <CreateTasks />
							</div>
						)}
					</div>
				</main>
			</div>
		</div>
	)
}

export default MainPage
