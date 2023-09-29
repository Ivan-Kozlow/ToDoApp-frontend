import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined'
import Header from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import CreateTasks from 'components/Todos/CreateTasks'
import TodoBox from 'components/Todos/TodoBox'
import { TypeTasks } from 'types/types'

export enum EnumProgress {
	done = 'done',
	start = 'start',
	inProgress = 'inProgress',
}

export enum EnumTodoTitle {
	start = 'Todo',
	inProgress = 'In Progress',
	end = 'Done',
}
const tasks: TypeTasks[] = [
	{
		_id: '1',
		title: 'Add product to the market',
		subTitle: 'Ui8 marketplace',
		completed: 0,
		progress: EnumProgress.start,
	},
	{
		_id: '2',
		title: 'Add product to the market',
		subTitle: 'Ui8 marketplace',
		completed: 0,
		progress: EnumProgress.start,
	},
	{
		_id: '3',
		title: 'Add product to the market',
		subTitle: 'Ui8 marketplace',
		completed: 2,
		progress: EnumProgress.done,
	},
	{
		_id: '4',
		title: 'Add product to the market',
		subTitle: 'Ui8 marketplace',
		completed: 0,
		progress: EnumProgress.start,
	},
	{
		_id: '5',
		title: 'Add product to the market',
		subTitle: 'Ui8 m asdflj asdlfajsdlkfj al;sdkfj argjoasdn asdiasodvnaarketplace',
		completed: 1,
		progress: EnumProgress.inProgress,
	},
	{
		_id: '6',
		title: 'Add product to the mar jkjlkjl lkjlkjl asdfasdf asdf asd fas dfa ads fa dsf asdf ket',
		subTitle: 'Ui8 marketplace',
		completed: 1,
		progress: EnumProgress.inProgress,
	},
]

const MainPage = () => {
	// const tasks = useAppSelector(s => s.todo.todos)
	const filterTasksByProgress = (progress: EnumProgress) => tasks.filter((task) => task.progress === progress)

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
						{tasks.length ? (
							<>
								{filterTasksByProgress(EnumProgress.start).length ? (
									<TodoBox title={EnumTodoTitle.start} tasks={filterTasksByProgress(EnumProgress.start)} />
								) : (
									''
								)}
								{filterTasksByProgress(EnumProgress.inProgress).length ? (
									<TodoBox
										title={EnumTodoTitle.inProgress}
										tasks={filterTasksByProgress(EnumProgress.inProgress)}
									/>
								) : (
									''
								)}
								{filterTasksByProgress(EnumProgress.done).length ? (
									<TodoBox title={EnumTodoTitle.end} tasks={filterTasksByProgress(EnumProgress.done)} />
								) : (
									''
								)}
							</>
						) : (
							<CreateTasks />
						)}
					</div>
				</main>
			</div>
		</div>
	)
}

export default MainPage
