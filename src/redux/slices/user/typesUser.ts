export interface IUser {
	_id: number
	nickname: string
	email: string
	createdAt: string
	updatedAt: string
}

export interface IInitStateUser {
	user: IUser | null
}
