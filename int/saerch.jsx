import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [count, setCount] = useState(0);


  useEffect(() => {
    fetchPosts();
  }, []);

  // const fetchPosts = async () => {
  //   try {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setPosts(response?.data || []);
  //   } catch (error) {
  //     console.error('Error fetching posts:', error);
  //   }
  // };

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCount = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <p>{count}</p>
      <button onClick={handleCount}>hello</button>
      {
        filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <p key={post.id}>{post.title}</p>
          ))
        ) : (
          <p>No results found</p>
        )
      }
    </div>
  );
}

export default App;
