import { FC, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Popover } from '@mui/material'

type TypePopover = {
	children?: JSX.Element
}
const MorePopover: FC<TypePopover> = ({ children }) => {
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
				{children}
			</Popover>
		</>
	)
}

export default MorePopover
