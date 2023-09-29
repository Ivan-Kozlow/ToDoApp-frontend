import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined'
import CheckBox from 'assets/CheckBox.svg'
import TaskIcon from 'assets/TaskIcon.svg'
import { Typecompleted } from 'types/types'

const TodoProgressBar = ({ completed }: Typecompleted) => {
	return (
		<div className='mb-4 flex items-center justify-between'>
			<img src={TaskIcon} alt='TaskIcon' />
			<div
				className={`h-1 ${
					completed === 0
						? 'bg-title'
						: completed === 1
						? 'bg-progressCenter'
						: completed === 2
						? 'bg-progressFull'
						: ''
				} w-full max-w-[99px] rounded-full`}
			></div>
			<RadioButtonCheckedOutlinedIcon sx={{ fontSize: 20 }} />
			<div
				className={`h-1 ${completed === 2 ? 'bg-progressFull' : 'bg-title'} w-full max-w-[99px] rounded-full`}
			></div>
			<img src={CheckBox} alt='Checkbox' />
		</div>
	)
}

export default TodoProgressBar
