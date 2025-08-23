import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

// Create the client once
const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16 }}>
        <h1>Advanced Data Handling with React Query</h1>

        {/* Toggle to unmount/mount and demonstrate cache */}
        <button onClick={() => setShowPosts((v) => !v)} style={{ marginBottom: 12 }}>
          {showPosts ? "Hide PostsComponent" : "Show PostsComponent"}
        </button>

        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
