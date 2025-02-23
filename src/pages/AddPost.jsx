import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useBlog } from '../BlogContext';


const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const {addPost} = useBlog();

  const date = new Date();
  
  const formatDate = date.toLocaleDateString('en-IN',{
    year:'numeric',
    month:'short',
    day:'numeric'
  }
  )

  const formatted = formatDate.replaceAll(',','');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, content, image,type,date:formatted };
    addPost(newPost);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 md:w-1/5">
      <h1 className="text-3xl font-semibold mb-6">Add New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Enter a Food Type"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="w-full bg-blue-400 border-b-2 border-b-blue-500 text-white p-2 rounded-4xl shadow-lg shadow-blue-300">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
