import { AxiosError } from 'axios'

export type TypeAxiosErrorResponse = AxiosError<{ message: string } | { msg: string }[]>

export const getErrorMessageFromResponse = (error: TypeAxiosErrorResponse | null): string => {
	const data = error?.response?.data
	if (Array.isArray(data)) return data.map((el) => el.msg).join('. ')
	else if (typeof data === 'object') return data.message
	else if (typeof data === 'string') return data
	else return ''
}
