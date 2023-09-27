import React from 'react'
import { Alert, AlertColor, Slide, Snackbar, SnackbarOrigin } from '@mui/material'

interface IMySnackbarProps {
	message: string
	position: SnackbarOrigin
	type: AlertColor
	slideDirection: 'left' | 'right' | 'up' | 'down'
}

const MySnackbar: React.FC<IMySnackbarProps> = ({ type, message, position, slideDirection }) => {
	const [state, setState] = React.useState(true)

	return (
		<Snackbar
			autoHideDuration={3000}
			open={state}
			onClose={(_, reason) => {
				if (reason === 'clickaway') return
				setState(false)
			}}
			TransitionComponent={(props) => <Slide {...props} direction={slideDirection} />}
			anchorOrigin={position}
		>
			<Alert severity={type} variant='filled'>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default MySnackbar
