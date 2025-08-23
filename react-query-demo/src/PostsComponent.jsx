// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  // useQuery = ask React Query to fetch + cache
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

  // Data loaded
  return (
    <div>
      <button onClick={() => refetch()}>🔄 Refresh Posts</button>
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
