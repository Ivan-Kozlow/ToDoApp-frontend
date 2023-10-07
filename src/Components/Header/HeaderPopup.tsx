import { Popover } from '@mui/material'
import { FC, useState } from 'react'

const HeaderPopup: FC<Record<'children' | 'buttonClick', JSX.Element>> = ({ children, buttonClick }) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)
	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined
	return (
		<>
			<button onClick={handleClick}>{buttonClick}</button>
			<Popover
				className='mt-3'
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

export default HeaderPopup
