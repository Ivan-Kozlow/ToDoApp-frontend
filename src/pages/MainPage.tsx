import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined'
import Header from 'components/Header/Header'
import Loader from 'components/Loader'
import { Sidebar } from 'components/Sidebar'
import TodosCategories from 'components/Todos/TodosCategories'

const MainPage: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
	return (
		<div className='flex text-[#fff]'>
			<Sidebar />
			<div className='w-full max-w-6xl mx-auto px-3'>
				<Header />
				<main className='h-[90vh] overflow-auto'>
					<section className='border-view-border mb-5'>
						<div className='border-view border-view-border-2 sm:pb-4 pb-2 mb-[-2px] pl-4'>
							<DnsOutlinedIcon sx={{ fontSize: 22, color: 'white' }} />
							<span>Board view</span>
						</div>
					</section>
					<div className='flex gap-5 mb-4 pb-4'>{!isLoading ? <TodosCategories /> : <Loader />}</div>
				</main>
			</div>
		</div>
	)
}

export default MainPage
