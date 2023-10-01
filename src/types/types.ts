import { ITodo } from 'Redux/slices/todo/typesTodo'
import { Dispatch, SetStateAction } from 'react'

export type TypeCompleted = ITodo['completed']

export type TypeForm = {
	createTask: boolean
	setCreateTask: Dispatch<SetStateAction<boolean>>
	children: React.ReactNode
}
export interface IFormInput {
	title: string
	subTitle: string
}