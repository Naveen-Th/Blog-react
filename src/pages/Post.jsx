import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { useBlog } from '../BlogContext';

const Post = () => {
  const { posts } = useBlog();
  const { id, title } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => `${post.id}/${post.title}` === `${id}/${title}`);

  if (!post) {
    return <div>Post not found</div>;
  }

  const relatedPosts = posts
    .filter((relatedPost) => relatedPost.id !== post.id) 
    .slice(0, 3); 

  return (
    <div className="container mx-auto p-4 md:w-3/5">
      <button
        className="bg-blue-300 p-3 mt-2 mb-5 rounded-xl shadow-lg outline-0 outline-black shadow-blue-300"
        onClick={() => navigate('/')}
      >
        &larr; Go Back
      </button>
      <h1 className="text-2xl md:text-4xl font-bold mt-9 mb-0 ml-4 md:ml-24">{post.title}</h1>
      <div className="flex items-center justify-start mt-5 ml-4 md:ml-24 space-x-4">
        <p className="text-red-500">{`// ${post.type}`}</p>
        <p className="text-gray-400">{post.date ? post.date : post.date}</p>
      </div>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[20em] md:h-[37em] object-cover  my-6"
      />
      <div className="flex w-full md:w-10/12 max-w-3xl flex-col items-center justify-center mx-auto">
        <p className="text-sm md:text-lg text-gray-500 text-start">{post.content}</p>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl font-medium">You May Also Like</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {relatedPosts.map((relatedPost) => (
            <div key={relatedPost.id} className="bg-white rounded-lg">
              <Link to={`/related/${relatedPost.id}/${relatedPost.title}`}>
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-48 object-cover shadow-xl shadow-black/10 mb-4"
                />
                <div className='p-5'>
                  <h2 className="text-xl font-semibold">{relatedPost.title}</h2>
                  <div className="flex items-center justify-start mt-5 space-x-4">
                    <p className="text-red-500 text-xs">{`// ${relatedPost.type}`}</p>
                    <p className="text-gray-400 text-xs">{relatedPost.date ? relatedPost.date : post.date}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
