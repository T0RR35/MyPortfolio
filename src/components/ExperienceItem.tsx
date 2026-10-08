import { useId, useState } from "react";
import { Briefcase, Check, ChevronDown, MapPin } from "lucide-react";
import type { ExperienceEntry, ExperienceData } from "@/data/experiences";
import "./ExperienceItem.css";

interface ExperienceItemProps {
    item: ExperienceEntry;
    labels: ExperienceData["labels"];
    defaultOpen?: boolean;
}

export default function ExperienceItem({ item, labels, defaultOpen = false }: ExperienceItemProps) {
    const [open, setOpen] = useState(defaultOpen);
    const detailsId = useId();

    return (
        <li className={`exp-item${open ? " exp-item--open" : ""}`}>
            <span className="exp-item__node" aria-hidden="true">
                <Briefcase size={12} />
            </span>

            <div className="exp-item__header">
                {item.logo && (
                    <img className="exp-item__logo" src={item.logo} alt="" loading="lazy" />
                )}

                <h3 className="exp-item__heading">
                    <button
                        type="button"
                        className="exp-item__toggle"
                        aria-expanded={open}
                        aria-controls={detailsId}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className="exp-item__top">
                            <span className="exp-item__role">{item.role}</span>
                            <span className="exp-item__tag">{item.tag}</span>
                            <ChevronDown size={18} aria-hidden="true" className="exp-item__chevron" />
                            <span className="exp-sr-only">{labels.toggle}</span>
                        </span>

                        <span className="exp-item__company">
                            {item.company}
                            <span className="exp-item__dot" aria-hidden="true"> · </span>
                            <span className="exp-item__location">
                                <MapPin size={14} aria-hidden="true" />
                                {item.location}
                            </span>
                        </span>

                        <span className="exp-item__period">{item.period}</span>
                    </button>
                </h3>
            </div>

            <p className="exp-item__description">{item.description}</p>

            <div id={detailsId} className="exp-item__details">
                <div className="exp-item__details-inner">
                    {item.responsibilities.length > 0 && (
                        <section>
                            <h4 className="exp-item__label">{labels.responsibilities}</h4>
                            <ul className="exp-checks">
                                {item.responsibilities.map((text) => (
                                    <li key={text}>
                                        <Check size={14} aria-hidden="true" />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {item.achievements.length > 0 && (
                        <section>
                            <h4 className="exp-item__label">{labels.achievements}</h4>
                            <ul className="exp-dots">
                                {item.achievements.map((text) => (
                                    <li key={text}>{text}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>

            {item.stack.length > 0 && (
                <ul className="exp-item__stack" aria-label="Stack">
                    {item.stack.map((tech) => (
                        <li key={tech} className="exp-item__pill">
                            {tech}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}