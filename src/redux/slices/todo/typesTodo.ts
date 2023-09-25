export interface ITodo {
	id: string
	title: string
	body: string
	complete: 0 | 1 | 2
	createdAt: string
	updatedAt: string
}

export interface IInitStateTodo {
	todos: ITodo[] | null
}
