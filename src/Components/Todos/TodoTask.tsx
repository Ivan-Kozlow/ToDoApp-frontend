import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { FC } from 'react'
import { Typecompleted } from 'types/types'
import TodoProgressBar from './Form/TodoProgressBar'
import MorePopover from 'components/MorePopover'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined'

type TypeTodoTask = {
	title: string
	subTitle: string
	completed: Typecompleted
}
const TodoTask: FC<TypeTodoTask> = ({ title, subTitle, completed }) => {
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

	return (
		<article className='bg-taskBox rounded-md p-5'>
			<div className='flex items-start gap-x-1 justify-between mb-1'>
				{/* TODO add ellipse on 2 string */}
				<h2 className='font-bold text-base truncate' title={title}>
					{title}
				</h2>
				<MorePopover>
					<section className='p-1 flex gap-y-1 flex-col text-sm font-semibold bg-primary text-[#fff] w-[90px]'>
						<button className='flex items-center justify-between gap-1 hover:bg-title transition-all duration-150 rounded-md p-1'>
							<span>Delete</span>
							<DeleteOutlineOutlinedIcon />
						</button>
						<button className='flex items-center justify-between gap-1 hover:bg-title transition-all duration-150 rounded-md p-1'>
							<span>Edit</span>
							<EditOutlinedIcon />
						</button>
						<button className='flex items-center justify-between gap-1 hover:bg-title transition-all duration-150 rounded-md p-1'>
							<span>Move</span>
							<MultipleStopOutlinedIcon />
						</button>
					</section>
				</MorePopover>
			</div>
			<p className='todo-text mb-4 max-w-[250px] truncate'>{subTitle}</p>
			<p className='mb-1 text-sm text-[#FFFFFF80]'>Progress</p>
			<TodoProgressBar completed={completed} />
			<div className='flex items-center justify-between'>
				<p className='todo-text px-4 py-2 bg-[#FFFFFF0F] rounded-full'>{date}</p>
				<button title='complete this'>
					<CheckCircleOutlineIcon />
				</button>
			</div>
		</article>
	)
}

export default TodoTask
