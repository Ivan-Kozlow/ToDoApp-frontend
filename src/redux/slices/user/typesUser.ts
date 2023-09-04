export type IUser = {
	_id: number
	nickname: string
	email: string
	createdAt: Date
	updateAt: Date
}

export type IInitStateUser = {
	user: IUser | null
}
