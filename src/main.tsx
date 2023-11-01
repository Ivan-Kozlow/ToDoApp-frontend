import './index.scss'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const queryClient = new QueryClient({
	defaultOptions: { queries: { keepPreviousData: true, refetchOnWindowFocus: false, retry: 2 } },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
		{/* eslint-disable comma-dangle */}
	</Provider>
)
