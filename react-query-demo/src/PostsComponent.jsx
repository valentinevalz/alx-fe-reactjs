// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  // React Query fetch + cache
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

  // Success state: data is cached automatically by React Query
  return (
    <div>
      <h2>📌 Posts (Data Fetching Component)</h2>

      {/* React Query Caching Demonstration */}
      <p>
        💡 These posts are cached by React Query. If you leave and come back,
        they load instantly from cache instead of fetching again!
      </p>

      {/* Refetch Interaction */}
      <button onClick={() => refetch()} style={{ margin: "10px 0" }}>
        🔄 Refresh Posts (Refetch Interaction)
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
