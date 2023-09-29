import { useState } from 'react'
import CreateTaskForm from './Form/CreateTaskForm'
import TodoProgressBar from './Form/TodoProgressBar'

const CreateTasks = () => {
	const [createTask, setCreateTask] = useState(true)
	return (
		<>
			{createTask ? (
				<button onClick={() => setCreateTask(!createTask)} className='bg-box rounded-md w-full mb-3 max-w-[320px]'>
					<h2 className='text-[#FFFFFF80] flex justify-center items-center border-dashed border-[2px] rounded-md h-44'>
						Create tasks
					</h2>
				</button>
			) : (
				<div className='bg-taskBox rounded-md w-full max-w-[320px] p-5 mb-3'>
					<CreateTaskForm createTask={createTask} setCreateTask={setCreateTask}>
						<p className='text-sm text-[#FFFFFF80]'>Progress</p>
						<TodoProgressBar completed={0} />
					</CreateTaskForm>
				</div>
			)}
		</>
	)
}

export default CreateTasks
