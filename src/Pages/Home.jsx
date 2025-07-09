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

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 px-4">
        <div className="bg-white rounded-lg shadow p-6 text-center w-full max-w-xs">
          <h2 className="text-3xl font-bold text-blue-600">100</h2>
          <p className="text-gray-600 mt-2">Total Posts</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center w-full max-w-xs">
          <h2 className="text-3xl font-bold text-green-600">50+</h2>
          <p className="text-gray-600 mt-2">Writers</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center w-full max-w-xs">
          <h2 className="text-3xl font-bold text-purple-600">1M+</h2>
          <p className="text-gray-600 mt-2">Readers</p>
        </div>
      </div>

        <Api/>
    </div>
  );
}

export default Home;


