export interface ExperienceEntry {
    role: string;
    tag: string;
    company: string;
    location: string;
    period: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    stack: string[];
    logo?: string;
}

export interface ExperienceData {
    eyebrow: string;
    title: string;
    subtitle: string;
    labels: {
        responsibilities: string;
        achievements: string;
        toggle: string;
    };
    items: ExperienceEntry[];
}