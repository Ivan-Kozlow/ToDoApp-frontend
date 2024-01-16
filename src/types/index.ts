import { Dispatch, SetStateAction } from 'react'

import { ITodo } from 'Redux/slices/todo/typesTodo'

export type TypeCompleted = ITodo['completed']

export type TypeForm = {
	setCreateTask: Dispatch<SetStateAction<boolean>>
	children?: React.ReactNode
	_id?: string
	isCreate: boolean
	btnName: string
}
export interface IFormInput {
	_id?: string
	title: ITodo['title']
	body: ITodo['body']
}
