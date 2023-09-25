import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined'
import { FC } from 'react'
import { TypeProgress } from './TodoBox'
import CheckBox from 'assets/CheckBox.svg'
import TaskIcon from 'assets/TaskIcon.svg'

type TypeTodoTask = {
	title: string
	subTitle: string
	progress: TypeProgress
}
const TodoTask: FC<TypeTodoTask> = ({ title, subTitle, progress }) => {
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

	return (
		<div className='bg-taskBox rounded-md p-5'>
			<div className='flex items-start gap-x-1 justify-between mb-1'>
				<h2 className='font-bold text-base'>{title}</h2>
				<button className='transition-all duration-100 hover:bg-title hover:rounded-full'>
					<MoreHorizIcon />
				</button>
			</div>
			<p className='todo-text mb-4 max-w-[250px]'>{subTitle}</p>
			<p className='mb-1 text-sm text-[#FFFFFF80]'>Progress</p>
			<div className='mb-4 flex items-center justify-between'>
				<img src={TaskIcon} alt='TaskIcon' />
				<div
					className={`h-1 ${
						progress === 'start'
							? 'bg-title'
							: progress === 'inProgress'
							? 'bg-progressCenter'
							: progress === 'done'
							? 'bg-progressFull'
							: ''
					} w-full max-w-[99px] rounded-full`}
				></div>
				<RadioButtonCheckedOutlinedIcon sx={{fontSize:20}} />
				<div
					className={`h-1 ${
						progress === 'done' ? 'bg-progressFull' : 'bg-title'
					} w-full max-w-[99px] rounded-full`}
				></div>
				<img src={CheckBox} alt='Checkbox' />
			</div>
			<div className='flex items-center justify-between'>
				<p className='todo-text px-4 py-2 bg-[#FFFFFF0F] rounded-full'>{date}</p>
				<button>
					<CheckCircleOutlineIcon />
				</button>
			</div>
		</div>
	)
}

export default TodoTask
