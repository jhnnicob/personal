import React from 'react';
import './project.css';

export default function Project({project}) {
    return (
        <div className="project">
            <div className="project__row">
                <div className="project__col">
                    <h3>{project.title}<span className="status-text">{project.status}</span></h3>
                    <p>{project.description}</p>
                    <div className="buttons">
                        <a href={project.websiteUrl} target="blank">View Website</a>
                        <a href={project.gitRepo} target="blank">Visit Repo</a>
                    </div>
                </div>

                <div className="project__col">
                    <img src={project.imgSrc} alt=""/>
                </div>
            </div>
        </div>
    )
}
