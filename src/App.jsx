import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import NavBar from './components/NavBar';
import Search from './components/Search';
import ScrollToTop from './components/ScrollTop';

import { BlogProvider } from './BlogContext';

function App() {
  

  return (
    <BlogProvider>
      <Router>
        <ScrollToTop />
        <NavBar >
        < Search />
        </NavBar>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/post/:id/:title" element={<Post />} />
          <Route path='/trending/:id/:title' element={<Post/>}/>
          <Route path='/related/:id/:title' element={<Post/>}/>
          <Route path="/add" element={<AddPost  />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
