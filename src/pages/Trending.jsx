import { useParams, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { useBlog } from '../BlogContext';

const Trending = () => {
  const {posts} = useBlog();
  const { id,title } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => `${post.id}/${post.title}` === `${id}/${title}`);
  console.log(id,title)

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-4 px-8 md:w-3/5 ">
      <button
        className="bg-blue-300 p-3 mt-2 mb-5 rounded-xl shadow-lg outline-0 outline-black shadow-blue-300"
        onClick={() => navigate('/')}
      >
        &larr; Go Back
      </button>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-md mb-6"
      />
      <p className="text-lg text-gray-700">{post.content}</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">More:</h3>
        <p>{post.more}</p>
      </div>
    </div>
  );
};

export default Trending;
