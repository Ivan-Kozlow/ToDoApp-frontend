import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { RootState } from '../redux/store'

const Header = () => {
	// const { nickname } = useAppSelector((state):RootState => state.user)
	return (
		<div>
			{/* <h1>Welcome back, {nickname}</h1> */}
		</div>
	)
}

export default Header
