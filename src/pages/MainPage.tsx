import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined'
import Header from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import CreateTasks from 'components/Todos/CreateTasks'
import TodoBox from 'components/Todos/TodoBox'

export enum EnumProgress {
	done = 'done',
	start = 'start',
	inProgress = 'inProgress',
}

export type TypeTasks = {
	_id: string
	title: string
	subTitle: string
	progress: EnumProgress
}

const tasks: TypeTasks[] = [
	{ _id: '1', title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: EnumProgress.start },
	{ _id: '2', title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: EnumProgress.start },
	{ _id: '3', title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: EnumProgress.start },
	{ _id: '4', title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: EnumProgress.start },
	{
		_id: '5',
		title: 'Add product to the market',
		subTitle: 'Ui8 m asdflj asdlfajsdlkfj al;sdkfj argjoasdn asdiasodvnaarketplace',
		progress: EnumProgress.start,
	},
	{
		_id: '6',
		title: 'Add product to the mar jkjlkjl lkjlkjl asdfasdf asdf asd fas dfa ads fa dsf asdf ket',
		subTitle: 'Ui8 marketplace',
		progress: EnumProgress.inProgress,
	},
	{ _id: '7', title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: EnumProgress.done },
	{ _id: '8', title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: EnumProgress.inProgress },
	{ _id: '9', title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: EnumProgress.done },
	{ _id: '10', title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: EnumProgress.done },
]

const MainPage: React.FC = () => {
	const filterTasksByProgress = (progress: EnumProgress) => tasks.filter((task) => task.progress === progress)

	return (
		<div className='flex text-[#fff]'>
			<Sidebar />
			<div className='w-full max-w-6xl mx-auto px-4'>
				<Header />
				<main className='overflow-auto h-[80vh]'>
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
									<TodoBox title={'Todo'} tasks={filterTasksByProgress(EnumProgress.start)} />
								) : (
									''
								)}
								{filterTasksByProgress(EnumProgress.inProgress).length ? (
									<TodoBox title={'In Progress'} tasks={filterTasksByProgress(EnumProgress.inProgress)} />
								) : (
									''
								)}
								{filterTasksByProgress(EnumProgress.done).length ? (
									<TodoBox title={'Done'} tasks={filterTasksByProgress(EnumProgress.done)} />
								) : (
									''
								)}
							</>
						) : (
							<section className='p-4'>
								<CreateTasks />
							</section>
						)}
					</div>
				</main>
			</div>
		</div>
	)
}

export default MainPage
