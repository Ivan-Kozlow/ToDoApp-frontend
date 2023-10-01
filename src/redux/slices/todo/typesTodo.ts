export interface ITodo {
	_id: string
	title: string
	body: string
	completed: 0 | 1 | 2
	createdAt: string
	updatedAt: string
}

export interface IInitStateTodo {
	todos: ITodo[] | null
}
