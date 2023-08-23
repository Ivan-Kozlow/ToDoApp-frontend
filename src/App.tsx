import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: { queries: { keepPreviousData: true, refetchOnWindowFocus: false } },
})

function App() {
	return <QueryClientProvider client={queryClient}>App</QueryClientProvider>
}

export default App
