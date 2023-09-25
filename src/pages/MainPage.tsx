import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined'
import Header from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import CreateTasks from 'components/Todos/CreateTasks'
import TodoBox, { TypeProgress } from 'components/Todos/TodoBox'

export type TypeTasks = {
	title: string
	subTitle: string
	progress: TypeProgress
}

const tasks: TypeTasks[] = [
	{ title: 'sAdd product to the market', subTitle: 'Ui8 marketplace', progress: 'start' },
	{ title: 'idd product to the market', subTitle: 'Ui8 marketplace', progress: 'start' },
	{ title: 'zAdd product to the market', subTitle: 'Ui8 marketplace', progress: 'start' },
	{
		title: 'zhAdd product to the market',
		subTitle: 'Ui8 m asdflj asdlfajsdlkfj al;sdkfj argjoasdn asdiasodvnaarketplace',
		progress: 'start',
	},
	{
		title: 'pdd product to the mar jkjlkjl lkjlkjl asdfasdf asdf asd fas dfa ads fa dsf asdf ket',
		subTitle: 'Ui8 marketplace',
		progress: 'inProgress',
	},
	{ title: 'bAdd product to the market', subTitle: 'Ui8 marketplace', progress: 'inProgress' },
	{ title: ' product to the market', subTitle: 'Ui8 marketplace', progress: 'inProgress' },
	{ title: 'zAdd product to the market', subTitle: 'Ui8 marketplace', progress: 'done' },
	{ title: ' tAdd product to the market', subTitle: 'Ui8 marketplace', progress: 'done' },
	{ title: 'mAdd product to the market', subTitle: 'Ui8 marketplace', progress: 'done' },
]

const MainPage = () => {
	const filterTasksByProgress = (progress: TypeProgress) => tasks.filter((task) => task.progress === progress)
	return (
		<div className='flex text-[#fff]'>
			<Sidebar />
			<div className='w-full max-w-6xl mx-auto px-4'>
				<Header />
				<main>
					<section className='border-view-border mb-5'>
						<div className='border-view border-view-border-2'>
							<DnsOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />
							<span>Board view</span>
						</div>
					</section>
					<div className='flex gap-5'>
						{tasks.length ? (
							<>
								{filterTasksByProgress('start').length ? (
									<TodoBox title={'Todo'} tasks={filterTasksByProgress('start')} />
								) : (
									''
								)}
								{filterTasksByProgress('inProgress').length ? (
									<TodoBox title={'In Progress'} tasks={filterTasksByProgress('inProgress')} />
								) : (
									''
								)}
								{filterTasksByProgress('done').length ? (
									<TodoBox title={'Done'} tasks={filterTasksByProgress('done')} />
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
