import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '@/data/projectData'
import OtherProjects from './OtherProjects'

function Projects() {

    return (
        <div id='projects' class="min-h-screen  grid gap-10 py-20 place-items-center font-mono ">
            <h2 className='text sm:text-3xl text-xl font-bold'>My Projects</h2>
            {
                projects.slice(0, 4).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))
            }
            <h2 className='text sm:text-3xl text-xl font-bold'>Other Sub Projects</h2>
            <div className="flex sm:flex-row flex-col">
                {projects.slice(4, 8).map((project, index) => (
                    <OtherProjects key={index} project={project} />
                ))}
            </div>

        </div>
    )
}

export default Projects