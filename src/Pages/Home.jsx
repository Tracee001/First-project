import React from 'react';
import Api from './Api';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="text-center text-4xl font-bold py-4">
        Welcome to <span className="text-blue-800">ModernBlog</span>
      </h1>

      
      

      <p className="text-center text-lg text-gray-600 font-normal px-4">
        Discover amazing stories, insights, and ideas from our community of writers. Dive into
        <br />
        a world of knowledge and inspiration.
      </p>

        <Api/>
    </div>
  );
}

export default Home;


