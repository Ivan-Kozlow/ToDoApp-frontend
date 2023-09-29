import { EnumProgress } from 'pages/MainPage'
import { Dispatch, SetStateAction } from 'react'

export type Typecompleted = 0 | 1 | 2
export type TypeTasks = {
	_id: string
	title: string
	subTitle: string
	completed: Typecompleted
	progress: EnumProgress
}
export type TypeForm = {
	createTask: boolean
	setCreateTask: Dispatch<SetStateAction<boolean>>
	children: React.ReactNode
}
