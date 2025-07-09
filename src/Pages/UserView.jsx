import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser, FaRegHeart, FaShareAlt } from 'react-icons/fa';

function UserView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data.blog));
  }, [id]);

  if (!post) return <p className="text-center mt-10 text-gray-500">Loading post...</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link to="/api" className="text-blue-600 font-medium inline-flex items-center mb-4 hover:underline">
          ← Back to Posts
        </Link>

        <div className="bg-white shadow-md rounded p-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6 gap-4">
            <span className="inline-flex items-center gap-1">
              <FaUser /> Author {post.id}
            </span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
              {post.category || 'math'}
            </span>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-500 rounded hover:bg-red-200">
              <FaRegHeart /> Like
            </button>
            <button className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
              <FaShareAlt /> Share
            </button>
          </div>

          <div
            className="prose max-w-none prose-sm sm:prose lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content_html }}
          />
        </div>
      </div>
    </div>
  );
}

export default UserView;
