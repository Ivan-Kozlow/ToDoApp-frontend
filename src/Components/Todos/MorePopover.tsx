import { todoActions } from 'Redux/slices/todo/todoSlice'
import { ITodo } from 'Redux/slices/todo/typesTodo'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import todoService from 'services/todo.service'
import { TypeAxiosErrorResponse } from 'utils/getErrorMessageOnResponse'
import { keyTodoRemove, keyTodoUpdate } from 'consts/queryKeys'
import { EnumTodoTitle } from 'consts/enums'
import { useAppDispatch } from 'hooks/redux'
import { TypeCompleted } from 'types'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined'
import { Popover } from '@mui/material'
import MySnackbar from 'components/MySnackbar'

const MoveTodo: { title: EnumTodoTitle; completed: TypeCompleted }[] = [
	{
		title: EnumTodoTitle.start,
		completed: 0,
	},
	{
		title: EnumTodoTitle.inProgress,
		completed: 1,
	},
	{
		title: EnumTodoTitle.end,
		completed: 2,
	},
]

type TypeMorePopover = {
	setCreateTask: Dispatch<SetStateAction<boolean>>
	_id: ITodo['_id']
}

const MorePopover: FC<TypeMorePopover> = ({ setCreateTask, _id }) => {
	const dispatch = useAppDispatch()
	const [moveTodoPopup, setMoveTodoPopup] = useState(false)
	const [btnIsDisable, setBtnIsDisable] = useState(false)
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

	const { mutate, isError } = useMutation<{ message: string }, TypeAxiosErrorResponse, ITodo['_id']>({
		mutationKey: [keyTodoRemove],
		mutationFn: () => todoService.delete(_id),
		onMutate: () => setBtnIsDisable(true),
		onSuccess: () => dispatch(todoActions.deleteTask(_id)),
		onSettled: () => setBtnIsDisable(false),
	})
	const { mutate: mutateMoveTodo } = useMutation<{ message: string }, TypeAxiosErrorResponse, ITodo['completed']>({
		mutationKey: [keyTodoUpdate],
		mutationFn: (completed) => todoService.update(_id, { completed }),
		onSuccess: (_, completed) => dispatch(todoActions.moveTodo({ _id, completed })),
	})

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)
	const open = Boolean(anchorEl)
	// FIXME jumping snackbar on rerender component
	const btnStyle =
		'flex items-center justify-between gap-1 hover:bg-title transition-all duration-150 rounded-md p-1 px-2'
	return (
		<>
			{isError && (
				<MySnackbar
					message={'Не удалось удалить заметку'}
					position={{ horizontal: 'right', vertical: 'bottom' }}
					type={'error'}
					slideDirection={'left'}
				/>
			)}
			<button
				onClick={handleClick}
				title='Больше'
				aria-label='Button to open more features for todo item'
				className='transition-all duration-150 hover:bg-title hover:rounded-full'
			>
				<MoreHorizIcon />
			</button>
			<Popover
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
						onClick={() => mutate(_id)}
						disabled={btnIsDisable}
						aria-disabled={btnIsDisable}
						className={`${btnStyle} disabled:bg-primary disabled:text-secondary`}
					>
						<span>Удалить</span>
						<DeleteOutlineOutlinedIcon />
					</button>
					<button onClick={() => setCreateTask((v) => !v)} className={`${btnStyle}`}>
						<span>Ред.</span>
						<EditOutlinedIcon />
					</button>
					<button onClick={() => setMoveTodoPopup(!moveTodoPopup)} className={`${btnStyle}`}>
						<span>Перем.</span>
						<MultipleStopOutlinedIcon />
					</button>
					<span
						className={`${moveTodoPopup && 'w-[90%] h-[1px] self-center bg-[gray] mt-1 transition-all'}`}
					></span>
					{moveTodoPopup && (
						<div className='flex gap-2 flex-col'>
							{MoveTodo.map(({ title, completed }) => (
								<button
									key={completed}
									onClick={() => mutateMoveTodo(completed)}
									className='hover:bg-title text-start w-full transition-all duration-150 rounded-md p-1 px-2'
								>
									{title}
								</button>
							))}
						</div>
					)}
				</section>
			</Popover>
		</>
	)
}

export default MorePopover
