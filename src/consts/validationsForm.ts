const REQUIRED_FIELD = 'Это поле обязательное'

const INVALID_EMAIL = 'Почта невалидна'
const INVALID_NAME = 'Имя невалидно'

const INVALID_NAME_LENGTH = 'Имя меньше 2 символов'
const INVALID_PASS_LENGTH = 'Пароль меньше 8 символов'
const INVALID_TITLE_LENGTH = 'Название меньше 3 символов'

export const validations = {
	withRequiredField: {
		email: {
			required: REQUIRED_FIELD,
			pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: INVALID_EMAIL },
		},
		nickname: {
			required: REQUIRED_FIELD,
			pattern: { value: /^[a-zA-Zа-яА-Я]{2}/, message: INVALID_NAME },
			minLength: { value: 2, message: INVALID_NAME_LENGTH },
		},
		password: {
			required: REQUIRED_FIELD,
			minLength: { value: 8, message: INVALID_PASS_LENGTH },
		},
		title: {
			required: REQUIRED_FIELD,
			minLength: { value: 3, message: INVALID_TITLE_LENGTH },
		},
	},
	withoutRequiredField: {
		email: {
			pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: INVALID_EMAIL },
		},
		nickname: {
			pattern: { value: /^[a-zA-Zа-яА-Я]{2}/, message: INVALID_NAME },
			minLength: { value: 2, message: INVALID_NAME_LENGTH },
		},
		password: {
			minLength: { value: 8, message: INVALID_PASS_LENGTH },
		},
	},
} as const
