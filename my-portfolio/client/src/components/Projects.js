
import React from 'react';

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    link: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    link: "https://github.com/yourusername/project2"
  },
  
];

const Projects = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-lg mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
