import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined'
import CheckBox from 'assets/CheckBox.svg'
import TaskIcon from 'assets/TaskIcon.svg'
import type { TypeCompleted } from 'types'

const TodoProgressBar: React.FC<{ completed: TypeCompleted }> = ({ completed }) => {
	return (
		<div className='flex gap-1 items-center justify-between'>
			<img src={TaskIcon} alt='TaskIcon' />
			<div
				className={`h-1 ${
					completed === 0
						? 'dark:bg-title bg-[#1C1D2214]'
						: completed === 1
						? 'bg-[#FFA048] dark:bg-progressCenter'
						: completed === 2
						? 'bg-progressFull'
						: ''
				} w-full max-w-[99px] rounded-full`}
			></div>
			<RadioButtonCheckedOutlinedIcon sx={{ fontSize: 20 }} />
			<div
				className={`h-1 ${
					completed === 2 ? 'bg-progressFull' : 'dark:bg-title bg-[#1C1D2214]'
				} w-full max-w-[99px] rounded-full`}
			></div>
			<img src={CheckBox} alt='Checkbox' />
		</div>
	)
}

export default TodoProgressBar
