import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Project {
  _id?: string;
  title: string;
  description: string;
  createdAt?: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) fetchProjectById(id);
  }, [id]);

  const fetchProjectById = async (projectId: string) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/projects/${projectId}`
      );
      setProject(res.data);
    } catch (err) {
      console.error("Error fetching project:", err);
    }
  };

  if (!project) return <p className="text-white">Loading project...</p>;

  return (
    <main className="max-w-[700px] mx-auto px-4 mt-12 text-white">
      <h1 className="text-3xl font-bold text-pink-400 mb-4">{project.title}</h1>
      <p className="text-gray-300">{project.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        Created at: {new Date(project.createdAt || "").toLocaleString()}
      </p>
    </main>
  );
};

export default ProjectDetails;
