import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined'
import Header from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import CreateTasks from 'components/Todos/CreateTasks'
import TodoBox, { Typecompleted } from 'components/Todos/TodoBox'

export type TypeTasks = {
	title: string
	subTitle: string
	completed: Typecompleted
}

const tasks: TypeTasks[] = [
	{ title: 'sAdd product to the market', subTitle: 'Ui8 marketplace', completed: 0 },
	{ title: 'idd product to the market', subTitle: 'Ui8 marketplace', completed: 0 },
	{ title: 'zAdd product to the market', subTitle: 'Ui8 marketplace', completed: 0 },
	{
		title: 'zhAdd product to the market',
		subTitle: 'Ui8 m asdflj asdlfajsdlkfj al;sdkfj argjoasdn asdiasodvnaarketplace',
		completed: 0,
	},
	{
		title: 'pdd product to the mar jkjlkjl lkjlkjl asdfasdf asdf asd fas dfa ads fa dsf asdf ket',
		subTitle: 'Ui8 marketplace',
		completed: 1,
	},
	{ title: 'bAdd product to the market', subTitle: 'Ui8 marketplace', completed: 1 },
	{ title: ' product to the market', subTitle: 'Ui8 marketplace', completed: 1 },
	{ title: 'zAdd product to the market', subTitle: 'Ui8 marketplace', completed: 2 },
	{ title: ' tAdd product to the market', subTitle: 'Ui8 marketplace', completed: 2 },
	{ title: 'mAdd product to the market', subTitle: 'Ui8 marketplace', completed: 2 },
]

const MainPage = () => {
	const filterTasksBycompleted = (completed: Typecompleted) => tasks.filter((task) => task.completed === completed)
	return (
		<div className='flex text-[#fff]'>
			<Sidebar />
			<div className='w-full max-w-6xl mx-auto px-4 pb-4'>
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
								{filterTasksBycompleted(0).length ? (
									<TodoBox title={'Todo'} tasks={filterTasksBycompleted(0)} />
								) : (
									''
								)}
								{filterTasksBycompleted(1).length ? (
									<TodoBox title={'In completed'} tasks={filterTasksBycompleted(1)} />
								) : (
									''
								)}
								{filterTasksBycompleted(2).length ? (
									<TodoBox title={'Done'} tasks={filterTasksBycompleted(2)} />
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
