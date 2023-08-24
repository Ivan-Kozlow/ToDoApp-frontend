export type IUser = {
	nickname: string
	email: string
	createdAt: Date
	updateAt: Date
}

export type IInitStateUser = {
	user: IUser
}
