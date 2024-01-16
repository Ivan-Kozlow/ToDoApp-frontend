import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { store } from './redux/store'

import App from './App'

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
	</Provider>,
)
