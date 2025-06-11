import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface BlogPost {
  _id?: string;
  title: string;
  description: string;
  content: string;
  createdAt?: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/blog`
      );
      setPosts(res.data);
    } catch (err) {
      console.error("Failed to fetch blog posts:", err);
    }
  };

  return (
    <main className="max-w-[900px] mx-auto px-4 mt-12 text-white">
      <h1 className="font-extrabold text-4xl mb-8">Blog</h1>

      {/* Blog Posts */}
      <section className="space-y-8">
        {posts.map((post) => (
          <article
            key={post._id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-shadow"
          >
            <h2 className="font-semibold text-2xl mb-2 text-pink-400 cursor-pointer hover:underline">
              <Link
                to={`/blog/${post._id}`}
                className="font-semibold text-2xl mb-2 text-pink-400 cursor-pointer no-underline hover:no-underline"
              >
                {post.title}
              </Link>{" "}
            </h2>
            <p className="text-gray-300 mb-2">{post.description}</p>
            <p className="text-gray-400 text-sm">
              {new Date(post.createdAt || "").toLocaleString()}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Blog;
