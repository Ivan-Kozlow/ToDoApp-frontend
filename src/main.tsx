import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
	defaultOptions: { queries: { keepPreviousData: true, refetchOnWindowFocus: false } },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</Provider>
)
