import { useEffect, useState } from 'react';
import Post from './Post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    })();
  }, []);

  if (error) return <h1>Error: {error}</h1>;

  const postsArray = posts.map(post => <Post key={post.id} {...post} />);
  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? <h1>Loading...</h1> : postsArray}
    </>
  );
}

export default Posts;
