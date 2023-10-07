import { ITodo } from 'Redux/slices/todo/typesTodo'
import { Dispatch, SetStateAction } from 'react'

export type TypeCompleted = ITodo['completed']

export type TypeForm = {
	createTask: boolean | string
	setCreateTask: Dispatch<SetStateAction<boolean>>
	children?: React.ReactNode
	_id?: string
	create: boolean
	btnName: string
}
export interface IFormInput {
	title: string
	body: string
}
