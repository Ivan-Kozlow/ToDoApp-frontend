export interface ITodo {
	_id: string
	title: string
	body: string
	user: string
	completed: 0 | 1 | 2
	createdAt: string
	updatedAt: string
	__v?: number
}

export interface IInitStateTodo {
	todos: ITodo[] | null
}
