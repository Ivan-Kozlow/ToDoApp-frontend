const RequiredField = 'This field is required'

export const validations = {
	withRequiredField: {
		email: {
			required: RequiredField,
			pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'email is not valid' },
		},
		nickname: {
			required: RequiredField,
			pattern: { value: /^[a-zA-Zа-яА-Я]{2}/, message: 'Name is not valid' },
			minLength: { value: 2, message: 'Name less 2 symbols' },
		},
		password: {
			required: RequiredField,
			minLength: { value: 8, message: 'Password less 8 symbols' },
		},
	},
	withoutRequiredField: {
		email: {
			pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'email is not valid' },
		},
		nickname: {
			pattern: { value: /^[a-zA-Zа-яА-Я]{2}/, message: 'Name is not valid' },
			minLength: { value: 2, message: 'Name less 2 symbols' },
		},
		password: {
			minLength: { value: 8, message: 'Password less 8 symbols' },
		},
	},
}
