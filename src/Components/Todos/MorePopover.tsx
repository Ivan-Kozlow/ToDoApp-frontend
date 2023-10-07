import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined'
import { Popover } from '@mui/material'
import { deleteTask } from 'Redux/slices/todo/todoSlice'
import { useAppDispatch } from 'hooks/redux'
import { Dispatch, FC, SetStateAction, useState } from 'react'

type TypeMorePopover = {
	setCreateTask: Dispatch<SetStateAction<boolean>>
	createTask: boolean
	_id: string
}

const MorePopover: FC<TypeMorePopover> = ({ setCreateTask, createTask, _id }) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)
	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	const dispatch = useAppDispatch()

	return (
		<>
			<button
				onClick={handleClick}
				title='more'
				className='transition-all duration-150 hover:bg-title hover:rounded-full'
			>
				<MoreHorizIcon />
			</button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<section className='p-1 flex gap-y-1 flex-col text-sm font-semibold bg-primary text-[#fff] min-w-[100px]'>
					<button
						onClick={() => dispatch(deleteTask({ _id }))}
						className='flex items-center justify-between gap-1 hover:bg-title transition-all duration-150 rounded-md p-1'
					>
						<span>Удалить</span>
						<DeleteOutlineOutlinedIcon />
					</button>
					<button
						onClick={() => setCreateTask(!createTask)}
						className='flex items-center justify-between gap-1 hover:bg-title transition-all duration-150 rounded-md p-1'
					>
						<span>Ред.</span>
						<EditOutlinedIcon />
					</button>
					<button className='flex items-center justify-between gap-1 hover:bg-title transition-all duration-150 rounded-md p-1'>
						<span>Перем.</span>
						<MultipleStopOutlinedIcon />
					</button>
				</section>
			</Popover>
		</>
	)
}

export default MorePopover
