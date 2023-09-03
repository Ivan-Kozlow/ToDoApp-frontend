import { Sidebar } from 'components/Sidebar'
import { Container } from '@mui/material'
import Header from 'components/Header'

const MainPage = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<Container maxWidth={'lg'} className='bg-primary'>
				<Header />
			</Container>
		</div>
	)
}

export default MainPage
