import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Calendar, CircleDot, Bot } from "lucide-react";
import "./ProjectCard.css";

export interface Project {
    name: string;
    status?: string;
    description: string;
    image_path: string;
    gif_path: string;
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
    const { name, status, description, image_path, gif_path, role, period, stack = [], repo, demo } = project;

    const [gifSrc, setGifSrc] = useState<string | null>(null);
    const gifBlob = useRef<Blob | null>(null);
    const currentUrl = useRef<string | null>(null);

    // Baixa a gif uma vez e guarda o arquivo na memória
    useEffect(() => {
        if (!gif_path) return;
        let cancelled = false;

        fetch(gif_path)
            .then((res) => res.blob())
            .then((blob) => {
                if (!cancelled) gifBlob.current = blob;
            })
            .catch(() => { });

        return () => {
            cancelled = true;
            if (currentUrl.current) URL.revokeObjectURL(currentUrl.current);
        };
    }, [gif_path]);

    const play = () => {
        if (!gif_path) return;
        if (currentUrl.current) URL.revokeObjectURL(currentUrl.current);

        // URL nova a cada hover = a gif sempre começa do frame 1
        if (gifBlob.current) {
            const url = URL.createObjectURL(gifBlob.current);
            currentUrl.current = url;
            setGifSrc(url);
        } else {
            // ainda não terminou de baixar: usa o caminho normal
            currentUrl.current = null;
            setGifSrc(gif_path);
        }
    };

    const stop = () => {
        if (currentUrl.current) {
            URL.revokeObjectURL(currentUrl.current);
            currentUrl.current = null;
        }
        setGifSrc(null);
    };

    return (
        <article
            className="project-card"
            onMouseEnter={play}
            onMouseLeave={stop}
            onFocus={(e) => {
                // só navegação por teclado; clique do mouse não prende o estado
                if (e.target.matches(":focus-visible")) play();
            }}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) stop();
            }}
        >
            <div className="project-card__cover" aria-hidden="true">
                {image_path ? (
                    <img className="project-card__image" src={image_path} alt="" loading="lazy" />
                ) : (
                    <span className="project-card__cover-name">{name}</span>
                )}

                <div className="project-card__terminal">
                    {gifSrc && (
                        <img className="project-card__image project-card__gif" src={gifSrc} alt="" />
                    )}
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
                        href={demo || repo}
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