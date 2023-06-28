import React from 'react'

function OtherProjects({ project }) {
    function navto() {
        window.open(project.link, "_blank")
    }
    return (
        <div class="card" onClick={navto}>
            <h3 class="title">{project.name}</h3>
            {
                (project.client) ? <p class="text">Paid Work</p> : ""
            }
            <div class="bar">
                <div class="filledbar">
                    {project.tech.map((tag, index) => (
                        <span key={index} class="tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div class="circle">
                <img src={project.image} alt="pic" />
            </div>
        </div>
    )
}

export default OtherProjects