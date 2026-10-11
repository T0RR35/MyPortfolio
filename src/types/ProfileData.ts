import type { LucideIcon } from "lucide-react";

export type ProfileLanguage = "en" | "pt";

export interface ProfileLinkEntity {
    label: string;
    href: string;
    icon: LucideIcon;
}

export interface ProfileStatEntity {
    value: string;
    label: string;
}

export interface ProfileAboutEntity {
    title: string;
    text: string;
}

export interface ProfileTechsLabelsEntity {
    languages: string;
    frameworks: string;
    databases: string;
    tools: string;
    concepts: string;
}

export interface ProfileTechsEntity {
    title: string;
    labels: ProfileTechsLabelsEntity;
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    concepts: string[];
}

export interface ProfileEducationItemEntity {
    title: string;
    organization: string;
    period: string;
    description: string;
}

export interface ProfileEducationEntity {
    title: string;
    items: ProfileEducationItemEntity[];
}

export interface ProfileCertificationItemEntity {
    title: string;
    issuer: string;
    year: number;
}

export interface ProfileCertificationsEntity {
    title: string;
    items: ProfileCertificationItemEntity[];
}

export interface ProfileSpokenLanguageEntity {
    name: string;
    level: string;
}

export interface ProfileSpokenLanguagesEntity {
    title: string;
    items: ProfileSpokenLanguageEntity[];
}

export interface ProfileEntity {
    subtitle: string;
    location: string;
    stats: ProfileStatEntity[];
    about: ProfileAboutEntity;
    techs: ProfileTechsEntity;
    education: ProfileEducationEntity;
    certifications: ProfileCertificationsEntity;
    languages: ProfileSpokenLanguagesEntity;
}