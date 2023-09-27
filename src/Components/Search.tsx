import { useRef, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'

const Search = () => {
	const [search, setSearch] = useState<boolean>(false)
	const [value, setValue] = useState('')
	const ref = useRef<HTMLInputElement | null>(null)

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
			<div className='flex gap-0'>
				<input
					ref={ref}
					value={value}
					onChange={(e) => {
						if (search) setValue(e.target.value)
					}}
					type='text'
					className={`opacity-0 transition-all text-[#fff] bg-title outline-none p-2 rounded-md rounded-r-none w-full max-w-[200px] ${
						search ? 'opacity-100' : ''
					}`}
				/>
				<button
					onClick={() => clearSearchValue()}
					className={`bg-title rounded-md rounded-l-none opacity-0 transition-all ${search ? 'opacity-100' : ''}`}
				>
					<ClearOutlinedIcon />
				</button>
			</div>
			<button onClick={inputSearch}>
				<SearchOutlinedIcon />
			</button>
		</div>
	)
}

export default Search
