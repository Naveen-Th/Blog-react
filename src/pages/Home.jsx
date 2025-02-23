import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useBlog } from '../BlogContext';

const trendingPosts = [
  {
    id: 100,
    title: 'Quick Green Pasta Salad',
    image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-4-5-copyright.jpg'
  },
  {
    id: 101,
    title: 'Easy Slow Cooker Dinners',
    image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-2-2-copyright-570x452.jpg'
  },
  {
    id: 102,
    title: 'Burgers Around the World',
    image: 'https://gutentype.ancorathemes.com/wp-content/uploads/2021/01/food-section-2-3-copyright-570x452.jpg'
  }
];

const Home = () => {
  const { posts, deletePost, sortByTitle, sortByType,sortNotSelect,sortByTime } = useBlog();


  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    switch(selectedOption) {
      case ('Sort By Title'):
        return sortByTitle();
      case ('Sort By Type'):
        return sortByType();
      case ('Sort By Date'):
        return sortByTime();
      case ('Select Option'):
          return sortNotSelect();        default:
        return sortNotSelect();
    }
  };

  if (posts.length === 0) {
    return (
      <div className="container mx-auto p-4 md:w-[74em] mb-4">
        <h1 className="text-4xl font-bold text-center mb-6">No Posts Available</h1>
        <p className="text-center text-gray-500">It looks like there are no posts yet. Please add some!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:w-[74em] mb-4">

      <div className="flex flex-col md:flex-row items-center justify-between md:bg-white px-0 py-2 md:px-10 md:py-5 mt-2 md:mt-10">
        <h3 className="text-xl font-medium mb-6 md:mb-0">Trending</h3>
        <div className="flex flex-col md:flex-row md:space-x-6 items-center w-10/12 md:justify-around ">
          {trendingPosts.map((post) => (
            <Link to={`/trending/${post.id}/${post.title}`} key={post.id}>
              <div className="flex flex-row md:flex-row items-center mb-6 md:mb-0">
                <img
                  className="w-20 h-20 rounded-full object-cover mb-2"
                  src={post.image}
                  alt={`${post.title}`}
                />
                <h1 className="font-semibold text-start text-sm md:text-lg ml-15 md:ml-5">
                  {post.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="md:text-4xl  text-2xl font-bold text-start my-10">Recent Posts</h1>
        <select
          onChange={handleSortChange}
          value={sortOption}
          className="w-30 text-xs  p-2 shadow-lg  shadow-red h-10 rounded-md bg-red-400 text-white border border-red-300 focus:ring-2 focus:ring-white focus:border-white transition-all duration-200  ease-in-out hover:bg-indigo-500"
        >
          <option value="Select Option" className="text-gray-500">Select Option</option>
          <option value="Sort By Type" className="transition-colors duration-300 hover:bg-indigo-100 hover:text-indigo-700">Sort By Type</option>
          <option value="Sort By Title" className="transition-colors duration-300 hover:bg-indigo-100 hover:text-indigo-700">Sort By Title</option>
          <option value="Sort By Date" className="transition-colors duration-300 hover:bg-indigo-100 hover:text-indigo-700">Sort By Date</option>
        </select>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {posts.map((post) => (
          <div key={post.id} className="relative group bg-white">
            <Link to={`/post/${post.id}/${post.title}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover mb-0 "
              />
              <div className='p-5'>
                <div className="flex items-center justify-start mt-5 space-x-4 ">
                  <p className="text-red-500">{`// ${post.type}`}</p>
                  <p className="text-gray-400">{post.date ? post.date : post.date}</p>
                </div>
                <h2 className="text-2xl font-semibold mt-5">{post.title}</h2>

                <div className="mt-10 flex justify-between items-center">
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/edit/${post.id}`}>
                      <button className="bg-white/80 p-2 rounded-lg text-black hover:text-blue-800">
                        Edit Post
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            
            <button
              onClick={() => {
                deletePost(post.id);
              }}
              className="bg-red-400 px-4 py-3 rounded-lg text-sm text-black hover:text-red-700 absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
