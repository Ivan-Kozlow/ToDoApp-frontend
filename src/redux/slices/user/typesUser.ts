export interface IUser {
	_id: string
	nickname: string
	avatar: string
	email: string
	createdAt: string
	updatedAt: string
	__v?: number
}

export interface IInitStateUser {
	user: IUser | null
}
