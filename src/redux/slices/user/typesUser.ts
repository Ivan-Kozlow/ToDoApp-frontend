export interface IUser {
	_id: number
	nickname: string
	email: string
	createdAt: Date
	updateAt: Date
}

export interface IInitStateUser {
	user: IUser | null
}
