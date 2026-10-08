import { useExperience } from "@/data/experiences";
import ExperienceItem from "@/components/ExperienceItem";
import "./Experiences.css";

export default function Experiences() {
    const { eyebrow, title, subtitle, labels, items } = useExperience();

    return (
        <section className="experience" aria-labelledby="experience-title">
            <header className="experience__header">
                <p className="experience__eyebrow">{eyebrow}</p>
                <h1 id="experience-title" className="experience__title">
                    {title}
                </h1>
                <p className="experience__subtitle">{subtitle}</p>
            </header>

            <ol className="experience__timeline">
                {items.map((item) => (
                    <ExperienceItem
                        key={`${item.company}-${item.role}`}
                        item={item}
                        labels={labels}
                        /*defaultOpen*/
                    />
                ))}
            </ol>
        </section>
    );
}