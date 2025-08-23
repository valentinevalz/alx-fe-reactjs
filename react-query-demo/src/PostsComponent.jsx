import { useQuery } from "react-query";

function PostsComponent() {
  // Ask React Query (mommy) to fetch posts
  const { data, error, isLoading, refetch } = useQuery(
    "posts", // key (like a label in toy box)
    () => fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
  );

  // 🍼 Show loading
  if (isLoading) return <p>⏳ Loading posts...</p>;

  // 🍼 Show error
  if (error) return <p>❌ Something went wrong!</p>;

  return (
    <div>
      <button onClick={() => refetch()} className="refresh">
        🔄 Refresh Posts
      </button>
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
