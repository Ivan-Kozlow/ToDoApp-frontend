import { Sidebar } from 'components/Sidebar'
import { Container } from '@mui/material'
import Header from 'components/Header'
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined'
import TodoBox, { TypeProgress } from 'components/Todos/TodoBox'

export type TypeTasks = {
	title: string
	subTitle: string
	progress: TypeProgress
}

const tasks: TypeTasks[] = [
	{ title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: 'start' },
	{ title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: 'start' },
	{ title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: 'start' },
	{
		title: 'Add product to the market',
		subTitle: 'Ui8 m asdflj asdlfajsdlkfj al;sdkfj argjoasdn asdiasodvnaarketplace',
		progress: 'start',
	},
	{
		title: 'Add product to the mar jkjlkjl lkjlkjl asdfasdf asdf asd fas dfa ads fa dsf asdf ket',
		subTitle: 'Ui8 marketplace',
		progress: 'inProgress',
	},
	{ title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: 'done' },
	{ title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: 'inProgress' },
	{ title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: 'done' },
	{ title: 'Add product to the market', subTitle: 'Ui8 marketplace', progress: 'done' },
]

const MainPage = () => {
	const filterTasksByProgress = (progress: TypeProgress) => tasks.filter((task) => task.progress === progress)
	return (
		<div className='flex text-[#fff]'>
			<Sidebar />
			<div className='w-full max-w-6xl mx-auto'>
				<Header />
				<main className='px-4'>
					<section className='border-view-border mb-5'>
						<div className='border-view border-view-border-2'>
							<DnsOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />
							<span>Board view</span>
						</div>
					</section>
					<div className='flex gap-5'>
						<TodoBox title={'Todo'} tasks={filterTasksByProgress('start')} />
						<TodoBox title={'In Progress'} tasks={filterTasksByProgress('inProgress')} />
						<TodoBox title={'Done'} tasks={filterTasksByProgress('done')} />
					</div>
				</main>
			</div>
		</div>
	)
}

export default MainPage
