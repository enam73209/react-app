import React from 'react';
import Project1 from '../assets/projects/1.jpg'
import Project2 from '../assets/projects/2.jpg'

const Project = () => {
    const ProjectsArray=[
        {   
            Id      :1,
            Title   :"Project 1",
            Img     :Project1,
            Des     :" This is a description of the first project. It showcases our skills and expertise in creating outstanding solutions."
                    
        },
        {   
            Id      :2,
            Title   :"Project 2",
            Img     :Project2,
            Des     :" Here is the second project. It demonstrates our commitment to innovation and quality in everything we do."
                    
        }

    ]
    return (
        <div className="project-page">
            <h1>Our Projects</h1>
            <p>
                Explore our featured projects below. We take pride in our work and are
                excited to share these examples with you.
            </p>

            {
                ProjectsArray.length!==0?
                ProjectsArray.map((project,i)=>(
                        <div key={project.Id} className="project">
                            <img
                            src={project.Img}
                            alt="Project 2"
                            className="project-image"
                            />
                            <h2>{project.Title}</h2>
                            <p>
                                {project.Des}
                            </p>
                        </div>
                    ))
                    :(<div className="project"><p>There is no available project to show</p></div>)
            }
            
    </div>
    );
};

export default Project;