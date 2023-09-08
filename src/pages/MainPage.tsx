import { Sidebar } from 'components/Sidebar'
import { Container } from '@mui/material'
import Header from 'components/Header'

const MainPage = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<Container maxWidth={'lg'}>
				<Header />
				<main></main>
			</Container>
		</div>
	)
}

export default MainPage
