// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  // ✅ Data fetching component created
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"], // cache key
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  // Loading state
  if (isLoading) {
    return <p>⏳ Loading posts...</p>;
  }

  // Error state
  if (error) {
    return <p>❌ Failed to fetch posts</p>;
  }

  return (
    <div>
      <h2>📌 PostsComponent</h2>

      {/* ✅ React Query caching demonstrated */}
      <p>
        💡 React Query automatically caches posts. If you navigate away and come
        back, data is served instantly from cache without a new API call.
      </p>

      {/* ✅ Data refetch interaction */}
      <button onClick={() => refetch()} style={{ margin: "10px 0" }}>
        🔄 Refresh Posts (Refetch)
      </button>

      {/* Render posts */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
