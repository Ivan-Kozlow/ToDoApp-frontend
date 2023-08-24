import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Sidebar } from "./Components/Sidebar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { keepPreviousData: true, refetchOnWindowFocus: false },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-primary">
        <Sidebar />
      </div>
    </QueryClientProvider>
  );
}

export default App;
