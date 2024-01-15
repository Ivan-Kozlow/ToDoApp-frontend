import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined'
import type { TypeCompleted } from 'types'

const TodoProgressBar: React.FC<{ completed: TypeCompleted }> = ({ completed }) => {
	return (
		<div className='flex gap-1 items-center justify-between'>
			<svg
				className='dark:fill-[#F8F8F8] fill-taskBox'
				width='20'
				height='20'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clip-path='url(#clip0_237_803)'>
					<path d='M16.6667 6.66663H3.33334V4.99996H16.6667V6.66663ZM15 1.66663H5.00001V3.33329H15V1.66663ZM8.59334 17.5833L5.84334 14.8333L7.01001 13.6666L8.59334 15.25L13.01 10.8333L14.1767 12L8.59334 17.5833Z' />
					<path d='M18.3333 8.33337H1.66667C1.22464 8.33337 0.800716 8.50897 0.488155 8.82153C0.175595 9.13409 0 9.55801 0 10L0 18.3334C0 18.7754 0.175595 19.1993 0.488155 19.5119C0.800716 19.8244 1.22464 20 1.66667 20H18.3333C18.7754 20 19.1993 19.8244 19.5118 19.5119C19.8244 19.1993 20 18.7754 20 18.3334V10C20 9.55801 19.8244 9.13409 19.5118 8.82153C19.1993 8.50897 18.7754 8.33337 18.3333 8.33337ZM18.3333 18.3334H1.66667V10H18.3333V18.3334Z' />
				</g>
				<defs>
					<clipPath id='clip0_237_803'>
						<rect width='20' height='20' fill='white' />
					</clipPath>
				</defs>
			</svg>
			{/* <img src={TaskIcon} alt='TaskIcon' /> */}
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
			<svg
				className='dark:fill-[#F8F8F8] fill-taskBox'
				width='20'
				height='20'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M13.75 3.75H16.875V18.125H3.125V3.75H6.25125V5H13.75V3.75ZM6.08625 10.4938L5.20125 11.3775L8.7375 14.9125L14.925 8.725L14.04 7.8425L8.7375 13.145L6.08625 10.4938ZM7.5 3.75V1.875H12.5V3.75H7.5Z' />
			</svg>
			{/* <img src={CheckBox} className='dark:fill-box' alt='Checkbox' /> */}
		</div>
	)
}

export default TodoProgressBar
