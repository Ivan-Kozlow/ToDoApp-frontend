export interface ITodo {
	id: number
	title: string
	body: string
	complete: number
}

export interface IInitStateTodo {
	todos: ITodo[]
}
