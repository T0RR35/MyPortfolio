import ProfileHeader from "@/components/ProfileHeader";
import { GraduationCap, Link2, Award, LanguagesIcon } from "lucide-react"
import "./Profile.css"
import { useProfile } from "@/data/profile";
import SkillsGlobe from "../components/SkillsGlobe";
import { globeSkills } from "@/data/globeSkills";


export default function Profile() {
    const profile = useProfile();
    const TECHS_LABELS = {
        languages: "Languages",
        frameworks: "Frameworks",
        databases: "Databases",
        tools: "Tools & Cloud",
        concepts: "Concepts",
    };
    const { title: techsTitle, ...techsGroups } = profile["techs"];

    return (
        <>
            <ProfileHeader />
            <section className="profile-sections" aria-label="stats">
                <dl className="profile-stats__grid">
                    {profile["stats"].map(({ value, label }) => (
                        <div key={label} className="profile-stats__card">
                            <dd className="profile-stats__value">{value}</dd>
                            <dt className="profile-stats__label">{label}</dt>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="profile-sections" aria-label="about">
                <div className="profile-default__card">
                    <h2 id="about-title" className="profile-default__title">
                        <Link2 size={14} aria-hidden="true" className="icons" />
                        {profile["about"]["title"]}
                    </h2>
                    <p className="profile-about__text">
                        {profile["about"]["text"]}
                    </p>
                </div>
            </section>

            <section className="profile-sections" aria-labelledby="techs-title">
                <div className="profile-default__card">
                    <h2 id="techs-title" className="profile-default__title">
                        <Link2 size={14} aria-hidden="true" className="icons" />
                        {techsTitle}
                    </h2>

                    <div className="profile-techs__layout">
                        <div className="profile-techs__groups">
                            {Object.entries(techsGroups).map(([key, items]) => {
                                if (!items?.length) return null;
                                const label = TECHS_LABELS[key.toLowerCase()] ?? key;

                                return (
                                    <div key={key} className="profile-techs__group">
                                        <h3 className="profile-techs__label">{label}</h3>
                                        <ul className="profile-techs__list">
                                            {items.map((tech) => (
                                                <li key={tech} className="profile-techs__pill">
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="profile-techs__globe">
                            <SkillsGlobe skills={globeSkills} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="profile-sections" aria-labelledby="education-title">
                <div className="profile-default__card profile-education__card">
                    <h2 id="education-title" className="profile-education__title">
                        <GraduationCap size={14} aria-hidden="true" className="icon-about" />
                        {profile["education"]["title"]}
                    </h2>

                    <ol className="profile-timeline">
                        {profile["education"]["items"].map(
                            ({ title, organization, period, description }) => (
                                <li key={title} className="profile-timeline__item">
                                    <h3 className="profile-timeline__title">{title}</h3>
                                    <p className="profile-timeline__org">{organization}</p>
                                    <p className="profile-timeline__period">{period}</p>
                                    <p className="profile-timeline__text">{description}</p>
                                </li>
                            )
                        )}
                    </ol>
                </div>
            </section>

            <section className="profile-sections profile-bottom" aria-label="certifications and languages">
                <div className="profile-default__card profile-bottom__card">
                    <h2 id="certs-title" className="profile-bottom__title">
                        <Award size={14} aria-hidden="true" className="icon-about" />
                        {profile["certifications"]["title"]}
                    </h2>

                    <ul className="profile-certs">
                        {profile["certifications"]["items"].map(({ title, issuer, year }) => (
                            <li key={title} className="profile-certs__item">
                                <h3 className="profile-certs__title">{title}</h3>
                                <p className="profile-certs__meta">{issuer} · {year}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="profile-default__card profile-bottom__card">
                    <h2 id="languages-title" className="profile-bottom__title">
                        <LanguagesIcon size={14} aria-hidden="true" className="icon-about" />
                        {profile["languages"]["title"]}
                    </h2>

                    <ul className="profile-langs">
                        {profile["languages"]["items"].map(({ name, level }) => (
                            <li key={name} className="profile-langs__item">
                                <span className="profile-langs__name">{name}</span>
                                <span className="profile-langs__level">{level}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}