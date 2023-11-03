import React from 'react'
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined'
import Header from 'components/Header/Header'
import Loader from 'components/Loader'
import { Sidebar } from 'components/Sidebar'
import TodosCategories from 'components/Todos/TodosCategories'

interface IMainPageProps {
	authChecking: boolean
	isFetchingTodo: boolean
}

const MainPage: React.FC<IMainPageProps> = React.memo(({ authChecking, isFetchingTodo }) => {
	const isLoading = authChecking || isFetchingTodo
	return (
		<div className='flex text-[#1C1D22] dark:text-[#fff]'>
			<Sidebar />
			<div className='w-full max-w-6xl mx-auto px-3'>
				<Header />
				<main className='h-[90vh] overflow-auto'>
					<section className='border-b-2 border-solid border-[#1C1D2214] dark:border-[#ffffff1a] mb-5'>
						<div className='flex items-center gap-x-2 w-full max-w-[137px] border-b-2 border-solid border-[#1C1D22] dark:border-[#757888] sm:pb-4 pb-2 mb-[-2px] pl-4'>
							<DnsOutlinedIcon sx={{ fontSize: 22, color: '#1C1D22 dark:white' }} />
							<span>Board view</span>
						</div>
					</section>
					<div className='flex gap-5 mb-4 pb-4'>{isLoading ? <Loader /> : <TodosCategories />}</div>
				</main>
			</div>
		</div>
	)
})

export default MainPage
