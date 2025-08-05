import { ProjectInfo } from "../User.tsx";
import ProjectCard from "./ProjectCard.tsx";


const Projects = () => {
    return (
        <div className="px-16 mx-20 mb-10 mt-20 font-mono " id="Projects">
            <h1 className="text-4xl mb-5 font-bold text-center text-white"><span className="text-primaryColor">02.&nbsp;</span>Projects</h1>
            <div className="flex flex-wrap justify-between gap-4 ">
                {
                    ProjectInfo.map((project:any, index:number) => <ProjectCard key={index } title={project.title} description={project.description} status={project.status} image={project.image} live={project.live} link={project.link} github={project.github} techStack={project.techStack} type={project.type} />)
                }
            </div>
        </div>
    );
}

export default Projects;