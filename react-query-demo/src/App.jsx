import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

// make the mommy (QueryClient)
const queryClient = new QueryClient();

function App() {
  return (
    // give mommy to the app
    <QueryClientProvider client={queryClient}>
      <h1>📚 Posts with React Query</h1>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
