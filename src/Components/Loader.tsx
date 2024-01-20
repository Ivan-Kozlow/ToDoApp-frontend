import { CircularProgress } from '@mui/material'

const Loader: React.FC = () => {
	return (
		<div className='fixed top-[80px] left-0 w-full h-full flex items-center justify-center'>
			<CircularProgress color='warning' />
		</div>
	)
}

export default Loader
