import { Sidebar } from 'components/Sidebar'
import { Container } from '@mui/material'
import Header from 'components/Header'

const MainPage = () => {
	return (
		<div>
			<Container maxWidth={'lg'} className='bg-primary'>
				<Sidebar />
				<Header />
			</Container>
		</div>
	)
}

export default MainPage
