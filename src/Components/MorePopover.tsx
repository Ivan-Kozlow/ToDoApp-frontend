import { FC, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Popover } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined'

const MorePopover = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)
	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined
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
			</Popover>
		</>
	)
}

export default MorePopover
