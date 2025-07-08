import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Api() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/blog-posts?limit=62')
      .then(res => res.json())
      .then(item => {
        setData(item.blogs);
      });
  }, []);

  const headerColors = [
    'bg-green-900',
    'bg-teal-200',
    'bg-orange-500',
    'bg-blue-400',
    'bg-yellow-700',
    'bg-gray-600'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-tight">
         Latest Blog Posts
      </h1>

          
      {data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Colored header */}
              <div
                className={`h-32 flex items-center justify-center text-white text-2xl italic font-semibold ${headerColors[index % headerColors.length]}`}
              >
                Blog Post #{index + 1}
              </div>

              {/* Content area */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Date and Button */}
                <div className="flex items-center justify-between mt-5">
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10m-13 5a9 9 0 1118 0 9 9 0 01-18 0z"
                      />
                    </svg>
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>

                  <Link
                    to={`/user/${item.id}`}
                    className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Loading...</p>
      )}
    </div>
  );
}

export default Api;
