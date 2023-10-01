import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TypeForm } from 'types/types'

interface IFormInput {
	title: string
	body: string
}

const CreateTaskForm: React.FC<TypeForm> = ({ createTask, setCreateTask, children }) => {
	const date = new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

	const {
		register,
		handleSubmit,
		formState: { errors },
		resetField,
		reset,
		setFocus,
	} = useForm<IFormInput>({
		defaultValues: {
			title: '',
			body: '',
		},
	})

	const focusInput = (name: string) => {
		resetField(name)
		setFocus(name)
	}

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data)
		reset()
		setCreateTask(!createTask)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
			<div className='flex justify-between items-center'>
				<div className='flex'>
					<input
						type='text'
						{...register('title', {
							required: 'Title is require field!',
						})}
						placeholder='Title'
						className='text-[#fff] font-bold bg-title outline-none p-1 rounded-md rounded-r-none'
					/>
					<div
						onClick={() => focusInput('title')}
						className='bg-title flex items-center cursor-pointer rounded-md rounded-l-none'
					>
						<ClearOutlinedIcon />
					</div>
				</div>
			</div>

			{errors.title && <p className='mb-1 text-[red]'>{errors.title.message}</p>}

			<div className='flex'>
				<input
					type='text'
					{...register('subTitle', {
						required: 'SubTitle is require field!',
					})}
					placeholder='SubTitle'
					className='text-[#FFFFFF90] font-bold bg-title outline-none p-1 rounded-md rounded-r-none'
				/>
				<div
					onClick={() => focusInput('subTitle')}
					className='bg-title flex items-center cursor-pointer rounded-md rounded-l-none'
				>
					<ClearOutlinedIcon />
				</div>
			</div>

			{errors.subTitle && <p className='mb-1 text-[red]'>{errors.subTitle.message}</p>}

			{children}
			<div className='flex justify-between gap-1 items-center'>
				<p className='todo-text px-4 py-2 bg-[#FFFFFF0F] rounded-full'>{date}</p>
				<button type='submit' className={`p-2 bg-[#FFFFFF0F] rounded-md`}>
					Create
				</button>
			</div>
		</form>
	)
}

export default CreateTaskForm
