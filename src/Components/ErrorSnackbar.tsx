import { Alert, AlertColor, Slide, Snackbar, SnackbarOrigin } from '@mui/material'

interface IErrorSnackbarProps {
	message: string
	position: SnackbarOrigin
	type: AlertColor
	slideDirection: 'left' | 'right' | 'up' | 'down'
}

const ErrorSnackbar: React.FC<IErrorSnackbarProps> = ({ type, message, position, slideDirection }) => {
	return (
		<Snackbar
			open={true}
			autoHideDuration={2000}
			TransitionComponent={(props) => <Slide {...props} direction={slideDirection} />}
			anchorOrigin={position}
		>
			<Alert severity={type} variant='filled'>
				{message}
			</Alert>
		</Snackbar>
	)
}

export default ErrorSnackbar
