import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import "./Projects.css";

export default function Projects() {
    return (
        <section className="projects" aria-labelledby="projects-title">
            {/* COLOCAR UM TITULO BONITO AQUI DPS*/}

            <div className="projects__grid">
                {projects["items"].map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
}