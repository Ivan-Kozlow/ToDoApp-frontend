import { useState } from 'react'
import TaskForm from './Form/TaskForm'
import TodoProgressBar from './Form/TodoProgressBar'

const CreateTasks = () => {
	const [createTask, setCreateTask] = useState(true)

	return (
		<>
			{createTask ? (
				<button onClick={() => setCreateTask(!createTask)} className='bg-box rounded-md w-full mb-3 max-w-[320px]'>
					<h2 className='text-[#FFFFFF80] flex justify-center items-center border-dashed border-[2px] rounded-md h-44'>
						Создать заметку
					</h2>
				</button>
			) : (
				<div className='bg-taskBox rounded-md w-full max-w-[320px] p-5 mb-3'>
					<TaskForm btnName='Создать' create createTask={createTask} setCreateTask={setCreateTask}>
						<p className='text-sm text-[#FFFFFF80]'>Статус</p>
						<TodoProgressBar completed={0} />
					</TaskForm>
				</div>
			)}
		</>
	)
}

export default CreateTasks
