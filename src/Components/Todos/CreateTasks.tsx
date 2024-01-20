import { useState } from 'react'

import TodoProgressBar from './Form/TodoProgressBar'
import TaskForm from './Form/TaskForm'

const CreateTasks = () => {
	const [createTask, setCreateTask] = useState(true)

	return (
		<>
			{createTask ? (
				<button
					onClick={() => setCreateTask(!createTask)}
					className='dark:bg-box rounded-md w-full mb-3 max-w-[320px]'
				>
					<h2 className='dark:text-[#FFFFFF80] flex justify-center items-center border-dashed border-[2px] dark:border-[#FFFFFF80] border-[#1C1D220F] rounded-md h-40 sm:h-44'>
						Создать заметку
					</h2>
				</button>
			) : (
				<div className='dark:bg-taskBox rounded-md w-full max-w-[320px] sm:p-5 p-3 mb-3 border-solid border-[2px] border-[#1C1D220F]'>
					<TaskForm btnName='Создать' isCreate setCreateTask={setCreateTask}>
						<p className='text-sm text-[#1C1D2280] dark:text-[#FFFFFF80]'>Прогресс</p>
						<TodoProgressBar completed={0} />
					</TaskForm>
				</div>
			)}
		</>
	)
}

export default CreateTasks
