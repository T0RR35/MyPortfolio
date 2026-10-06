import { ArrowUpRight, Calendar, CircleDot, Bot } from "lucide-react";
import "./ProjectCard.css";

export interface Project {
    name: string;
    status?: string;
    description: string;
    image_path: string;
    role: string;
    period: string;
    stack: string[];
    repo?: string;
    demo?: string;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { name, status, description, image_path, role, period, stack = [], repo, demo } = project;
    const deps = stack.map((tech) => `"${tech.toLowerCase()}"`).join(" · ");

    return (
        <article className="project-card">
            <div className="project-card__cover" aria-hidden="true">
                {image_path ? (
                    <img className="project-card__image" src={image_path} alt="" loading="lazy" />
                ) : (
                    <span className="project-card__cover-name">{name}</span>
                )}

                <div className="project-card__terminal">
                    <p>
                        <span className="project-card__prompt">$</span> cat deps.json
                    </p>
                    <p>{deps}</p>
                </div>
            </div>

            <div className="project-card__body">
                <div className="project-card__head">
                    <h3 className="project-card__name">{name}</h3>
                    {status && (
                        <span className="project-card__status">
                            <CircleDot size={12} aria-hidden="true" />
                            {status}
                        </span>
                    )}
                </div>

                <p className="project-card__description">{description}</p>

                <dl className="project-card__meta">
                    <div>
                        <dt>role</dt>
                        <dd>{role}</dd>
                    </div>
                    <div>
                        <dt>period</dt>
                        <dd>
                            <Calendar size={12} aria-hidden="true" />
                            {period}
                        </dd>
                    </div>
                </dl>

                <ul className="project-card__stack" aria-label="Tecnologias">
                    {stack.map((tech) => (
                        <li key={tech} className="project-card__tag">
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className="project-card__footer">
                    {repo && (
                        <a
                            className="project-card__source"
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Bot size={14} aria-hidden="true" />
                            Source
                        </a>
                    )}

                    <a
                        className="project-card__open"
                        href={demo ?? repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir ${name}`}
                    >
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </article>
    );
}