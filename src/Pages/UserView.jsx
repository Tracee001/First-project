import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{new Date(post.created_at).toLocaleDateString()}</p>
      <img
        src={post.photo_url}
        alt={post.title}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content_html }}
      />
    </div>
  );
}

export default UserView;
