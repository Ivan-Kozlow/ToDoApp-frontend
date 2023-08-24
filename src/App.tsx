import { Sidebar } from "./components/Sidebar";
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useAppDispatch } from './hooks/redux'
import { userActions } from './redux/slices/user/userSlice'
import userService from './services/user.service'

function App() {
  const dispatch = useAppDispatch()
	const { data } = useQuery({
		queryKey: ['user'],
		queryFn: () => userService.getMe(),
	})
	React.useEffect(() => {
		data && dispatch(userActions.saveUser(data))
	}, [data])

  return (
      <div className="bg-primary">
        <Sidebar />
      </div>
  )
}

export default App;
