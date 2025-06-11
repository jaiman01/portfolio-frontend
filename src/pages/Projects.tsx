import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Project {
  _id?: string;
  title: string;
  description: string;
  createdAt?: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/projects`
      );
      setProjects(res.data);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
  };

  return (
    <main className="max-w-[900px] mx-auto px-4 mt-12">
      <h1 className="text-white font-extrabold text-4xl mb-8">Projects</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project._id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-shadow"
          >
            <h2 className="font-semibold text-xl mb-2 text-pink-400">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-600"
              href="#"
            >
              View case study
              <i className="fas fa-arrow-right"></i>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Projects;
