import { useRef, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import style from './Search.module.scss'
// import { useAppSelector } from 'hooks/redux'

const Search = () => {
	// const tasks = useAppSelector((s) => s.todo.todos)
	const [search, setSearch] = useState<boolean>(false)
	const [value, setValue] = useState('')
	const ref = useRef<HTMLInputElement | null>(null)

	// const searchByTitle = () => tasks.filter((task) => task.title.toLowerCase().includes(value.toLowerCase()))

	const inputSearch = () => {
		setSearch(!search)
		ref.current?.focus()
	}
	const clearSearchValue = () => {
		setValue('')
		ref.current?.focus()
	}
	return (
		<div className='flex gap-2'>
			<div className='flex gap-0 relative'>
				<input
					ref={ref}
					value={value}
					onChange={(e) => {
						if (search) setValue(e.target.value)
						// searchByTitle()
					}}
					type='text'
					placeholder='Search is...'
					className={`${style.input} ${search ? style.visible : ''}`}
				/>
				<button
					onClick={() => clearSearchValue()}
					className={`bg-title rounded-md rounded-l-none opacity-0 transition-all invisible ${
						search ? 'opacity-100 !visible' : ''
					}`}
				>
					<ClearOutlinedIcon />
				</button>
			</div>
			<button onClick={inputSearch} title='Search'>
				<SearchOutlinedIcon />
			</button>
		</div>
	)
}

export default Search
