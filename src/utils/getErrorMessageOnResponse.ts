import { AxiosError } from 'axios'

export type TypeAxiosErrorResponse = AxiosError<{ message: string } | { msg: string }[]>

export const getErrorMessageForResponse = (error: TypeAxiosErrorResponse | null) => {
	const data = error?.response?.data
	if (Array.isArray(data)) return data.map((el) => el.msg).join('. ')
	if (typeof data === 'object') return data.message
	else return false
}
