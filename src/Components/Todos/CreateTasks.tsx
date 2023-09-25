import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CheckBox from 'assets/CheckBox.svg'
import TaskIcon from 'assets/TaskIcon.svg'
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { useRef, useState } from 'react'

const CreateTasks = () => {
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

	const [value, setValue] = useState({ title: '', subTitle: '' })
	const [createTask, setCreateTask] = useState(true)
	const ref = useRef<HTMLInputElement>(null)
	const ref2 = useRef<HTMLInputElement>(null)

	const clearInputValue = (isRef: HTMLInputElement, inputValue: string) => {
		if (inputValue === value.title) setValue({ ...value, title: '' })
		if (inputValue === value.subTitle) setValue({ ...value, subTitle: '' })
		isRef.current?.focus()
	}
	const taskSubmit = () => {
		setCreateTask(!createTask)
		setValue({ title: '', subTitle: '' })
	}
	return (
		<>
			{createTask ? (
				<button onClick={() => setCreateTask(!createTask)} className='bg-box rounded-md w-full mb-3 max-w-[352px]'>
					<h2 className='text-[#FFFFFF80] flex justify-center items-center border-dashed border-[2px] rounded-md h-44'>
						Create tasks
					</h2>
				</button>
			) : (
				<div className='bg-taskBox rounded-md p-5 mb-3'>
					<div className='flex items-center gap-x-1 justify-between mb-1'>
						<h2 className='font-bold text-base flex'>
							<input
								placeholder='Title'
								ref={ref}
								className='text-[#fff] bg-title outline-none p-[3px] rounded-md rounded-r-none'
								type='text'
								value={value.title}
								onChange={(e) => setValue({ ...value, title: e.target.value })}
							/>
							<button
								onClick={() => clearInputValue(ref, value.title)}
								className='bg-title rounded-md rounded-l-none'
							>
								<ClearOutlinedIcon />
							</button>
						</h2>
						<button className='transition-all duration-100 hover:bg-title hover:rounded-full'>
							<MoreHorizIcon />
						</button>
					</div>
					<div className='font-bold text-base flex my-3'>
						<input
							placeholder='SubTitle'
							ref={ref2}
							className='text-[#FFFFFF90] bg-title outline-none p-[3px] rounded-md rounded-r-none'
							type='text'
							value={value.subTitle}
							onChange={(e) => setValue({ ...value, subTitle: e.target.value })}
						/>
						<button
							onClick={() => clearInputValue(ref2, value.subTitle)}
							className='bg-title rounded-md rounded-l-none'
						>
							<ClearOutlinedIcon />
						</button>
					</div>
					<p className='mb-1 text-sm text-[#FFFFFF80]'>Progress</p>
					<div className='mb-4 flex items-center justify-between'>
						<img src={TaskIcon} alt='TaskIcon' />
						<div className={`h-1 bg-title w-full max-w-[99px] rounded-full`}></div>
						<RadioButtonCheckedOutlinedIcon sx={{ fontSize: 20 }} />
						<div className={`h-1 bg-title w-full max-w-[99px] rounded-full`}></div>
						<img src={CheckBox} alt='Checkbox' />
					</div>
					<div className='flex items-center gap-1 justify-between'>
						<p className='todo-text px-4 py-2 bg-[#FFFFFF0F] rounded-full'>{date}</p>
						<button onClick={taskSubmit} className='p-2 bg-[#FFFFFF0F] rounded-md'>
							Create
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default CreateTasks
