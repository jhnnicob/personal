import React from 'react';
import Project from '../project';
import './projects.css';

export default function Projects({projects}) {
    return (
        <div className="projects" id="projects">
          <div className="projects__body">
            <h2>Projects</h2>
            { projects.map((project, index) => (
              <Project key={index} project={project}/>
            ))}
          </div>
        </div>
    )
}
