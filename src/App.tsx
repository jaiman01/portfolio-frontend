import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import GetInTouch from "./pages/GetInTouch";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import "./index.css";
import BlogDetail from "./pages/BlogDetail";
import ProjectDetails from "./pages/ProjectDetails";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />{" "}
          {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
