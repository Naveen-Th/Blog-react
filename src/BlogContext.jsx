import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchPosts } from './Api';

// Create the context
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setSearchQuery('');
  };

  const editPost = (id, updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === id ? updatedPost : post))
    );
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    setSearchQuery('');
  };

  const sortByTitle = () => {
    const sortByTile = [...posts].sort((a, b) => a.title.localeCompare(b.title));
    setPosts(sortByTile); 
  };

  const sortByType = () => {
    const sortByType = [...posts].sort((a,b) => a.type.localeCompare(b.type));
    setPosts(sortByType)
  }

  const sortByTime = () => {
    const sortByTime = [...posts].sort((a,b) => a.date.localeCompare(b.date));
    setPosts(sortByTime)
  }

  const sortNotSelect = () => {
    setPosts([...posts].sort((a,b) => b.title.localeCompare(a.title)));
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <BlogContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        posts: filteredPosts,
        sortByTitle, 
        sortNotSelect,
        sortByType,
        sortByTime,
        deletePost,
        addPost,
        editPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export function useBlog() {
  const context = useContext(BlogContext);
  return context;
}
