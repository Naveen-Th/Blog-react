import React, { useState, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '../BlogContext';

function EditPost() {
  const { posts, editPost } = useBlog();
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === parseInt(id));

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [img, setImg] = useState('');
  const [type,setType] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImg(post.image);
      setType(post.type);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { id: post.id, title: title, content: content, image: img,type:type };
    editPost(post.id, updatedPost);
    navigate('/');
  };

  if (!post) return <p className="text-center text-red-500">Post not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium mb-2">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="content" className="text-lg font-medium mb-2">Content:</label>
          <textarea
            name='content'
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="6"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium mb-2">Meal Type:</label>
          <input
            name='type'
            id="type"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Type"
          />
        </div>

        {/* Display Current Image */}
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium mb-2">Image URL:</label>
          <input
            name='img'
            id="img"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
        </div>
        
        {/* Display the current image */}
        {img && (
          <div className="mt-4">
            <img src={img} alt="Current Post" className="w-11/12 h-auto rounded-md shadow-sm" />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPost;
