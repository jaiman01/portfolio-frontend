import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface BlogPost {
  _id?: string;
  title: string;
  description: string;
  content: string;
  createdAt?: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/blog/${id}`
        );
        setPost(res.data);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p className="text-center text-white mt-20">Loading...</p>;

  return (
    <main className="max-w-[800px] mx-auto px-4 mt-12 text-white">
      <h1 className="font-extrabold text-4xl mb-4">{post.title}</h1>
      <p className="text-gray-400 mb-4">
        {new Date(post.createdAt || "").toLocaleString()}
      </p>
      <h2 className="text-pink-300 font-medium mb-4">{post.description}</h2>
      <div className="text-gray-200 leading-7 whitespace-pre-line">
        {post.content}
      </div>
    </main>
  );
};

export default BlogDetail;
