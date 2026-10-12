import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/data/projects";
import "./Projects.css";

export default function Projects() {
    const { eyebrow, title, subtitle, role_title, period_title, source_title, items } = useProjects();

    return (
        <>
            <section className="projects__header">
                <header>
                    <p className="projects__eyebrow">{eyebrow}</p>
                    <h1 id="projects-title" className="projects__title">
                        {title}
                    </h1>
                    <p className="projects__subtitle">{subtitle}</p>
                </header>
            </section>

            <section className="projects" aria-labelledby="projects-title">
                <div className="projects__grid">
                    {items.map((project) => (
                        <ProjectCard key={project.name} project={project} titles={[role_title, period_title, source_title]} />
                    ))}
                </div>
            </section>
        </>
    );
}