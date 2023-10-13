export const getLocalDateNumbers = (date?: string | Date | number): string =>
	date
		? new Date(date).toLocaleString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' })
		: new Date().toLocaleString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' })
