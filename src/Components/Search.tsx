import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { useRef, useState } from 'react'
import style from './Search.module.scss'
import { useAppSelector } from 'hooks/redux'
import { getLocalDateNumbers } from 'utils/getLocalDate'

const Search: React.FC = () => {
	const tasks = useAppSelector((s) => s.todo.todos)
	const [search, setSearch] = useState<boolean>(false)
	const [value, setValue] = useState('')
	const ref = useRef<HTMLInputElement>(null)

	const inputSearch = () => {
		setSearch(!search)
		ref.current?.focus()
	}
	const clearSearchValue = () => {
		setValue('')
		ref.current?.focus()
	}
	return (
		<div className='flex gap-2 relative'>
			<div className='flex gap-0'>
				<input
					ref={ref}
					value={value}
					onChange={(e) => {
						if (search) setValue(e.target.value)
					}}
					type='text'
					placeholder='Поиск...'
					className={`${style.input} ${search && style.visible}`}
				/>
				<button
					onClick={() => clearSearchValue()}
					className={`bg-title rounded-md rounded-l-none opacity-0 transition-all invisible ${
						search && 'opacity-100 !visible'
					}`}
				>
					<ClearOutlinedIcon />
				</button>
			</div>
			<button onClick={inputSearch} title='Search'>
				<SearchOutlinedIcon />
			</button>
			{!search ||
				(value !== '' && (
					<section className='bg-box absolute top-12 overflow-y-auto rounded-md p-2 max-h-[22vh] w-[200px] flex flex-col gap-y-2'>
						{tasks
							?.filter((task) => task.title.trim().toLowerCase().includes(value.trim().toLowerCase()))
							.map(({ title, _id, createdAt, completed }) => (
								<button
									key={_id}
									className='p-2 bg-taskBox hover:bg-title text-start transition-all duration-150 rounded-md text-[#fff]'
								>
									<p className='mb-[6px] truncate font-semibold'>{title}</p>
									<span className='text-[#FFFFFF80] mb-1 text-sm block'>{getLocalDateNumbers(createdAt)}</span>
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
								</button>
							))}
					</section>
				))}
		</div>
	)
}

export default Search
