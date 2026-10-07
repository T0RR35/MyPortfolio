import { useLanguage } from "@/utils/languageSwitcher";
import { MapPin, Globe, Mail, Smartphone, Bot } from "lucide-react";

const profileLinks = [{
        label: "GitHub",
        href: "https://github.com/T0RR35",
        icon: Bot
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/rafaeltorresmodesto/",
        icon: Globe
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/5531989790048",
        icon: Smartphone
    },
    {
        label: "E-mail",
        href: "mailto:modestorresrafael@gmail.com",
        icon: Mail
    }
]

const english_profile = {
    subtitle: "Backend Software Engineer",
    location: "Belo Horizonte, MG, Brazil",
    stats: [
        { value: "4+", label: "Years coding" },
        { value: "1+", label: "Year professional experience" },
        { value: "5", label: "Projects shipped" },
        { value: "4", label: "Systems in prod" },
    ],
    about: {
        title: "About",
        text: "I'm a Software Engineering student focused on backend development and software architecture. I enjoy building practical solutions, working with APIs and databases, and continuously learning new technologies and better ways to build software.",
    },
    techs: {
        title: "Technical DNA — Skill matrix",
        labels: {
            languages: "Languages",
            frameworks: "Frameworks",
            databases: "Databases",
            tools: "Tools & Cloud",
            concepts: "Concepts",
        },
        languages: ["TypeScript", "Python", "Java", "Javascript", "C++", "C"],
        frameworks: ["Django", "Spring Boot", "React"],
        databases: ["PostgreSQL", "MongoDB", "MySQL"],
        tools: ["Docker"],
        concepts: ["API", "ORM", "Blockchain"],
    },
    education: {
        title: "Education",
        items: [
            {
                title: "Software Engineering",
                organization: "Pontifical Catholic University of Minas Gerais (PUC Minas)",
                period: "2026 — 2029 (expected)",
                description: "Software development, engineering practices, and system design.",
            },
            {
                title: "Information Technology Technical Degree",
                organization: "Federal Center for Technological Education of Minas Gerais (CEFET-MG)",
                period: "2023 — 2025",
                description: "Programming, databases, web development, and software engineering.",
            },
        ],
    },
    certifications: {
        title: "Certifications",
        items: [
            { title: "AWS Certified Solutions Architect — Associate", issuer: "Amazon", year: 2025 },
            { title: "CKA: Certified Kubernetes Administrator", issuer: "CNCF", year: 2024 },
            { title: "MongoDB Associate Developer", issuer: "MongoDB University", year: 2023 },
        ],
    },
    languages: {
        title: "Languages",
        items: [
            { name: "Portuguese", level: "Native" },
            { name: "English", level: "Professional (C1)" },
        ],
    },
};

const portuguese_profile = {
    subtitle: "Engenheiro de Software Backend",
    location: "Belo Horizonte, MG, Brasil",
    stats: [
        { value: "4+", label: "Anos programando" },
        { value: "1+", label: "Ano de experiência profissional" },
        { value: "5", label: "Projetos entregues" },
        { value: "4", label: "Sistemas em produção" },
    ],
    about: {
        title: "Sobre",
        text: "Sou estudante de Engenharia de Software com foco em desenvolvimento backend e arquitetura de software. Gosto de construir soluções práticas, trabalhar com APIs e bancos de dados e estar sempre aprendendo novas tecnologias e melhores formas de desenvolver software.",
    },
    techs: {
        title: "DNA Técnico — Matriz de habilidades",
        labels: {
            languages: "Linguagens",
            frameworks: "Frameworks",
            databases: "Bancos de dados",
            tools: "Ferramentas & Cloud",
            concepts: "Conceitos",
        },
        languages: ["TypeScript", "Python", "Java", "Javascript", "C++", "C"],
        frameworks: ["Django", "Spring Boot", "React"],
        databases: ["PostgreSQL", "MongoDB", "MySQL"],
        tools: ["Docker"],
        concepts: ["API", "ORM", "Blockchain"],
    },
    education: {
        title: "Formação",
        items: [
            {
                title: "Engenharia de Software",
                organization: "Pontifícia Universidade Católica de Minas Gerais (PUC Minas)",
                period: "2026 — 2029 (previsto)",
                description: "Desenvolvimento de software, práticas de engenharia e design de sistemas.",
            },
            {
                title: "Técnico em Informática",
                organization: "Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG)",
                period: "2023 — 2025",
                description: "Programação, bancos de dados, desenvolvimento web e engenharia de software.",
            },
        ],
    },
    certifications: {
        title: "Certificações",
        items: [
            { title: "AWS Certified Solutions Architect — Associate", issuer: "Amazon", year: 2025 },
            { title: "CKA: Certified Kubernetes Administrator", issuer: "CNCF", year: 2024 },
            { title: "MongoDB Associate Developer", issuer: "MongoDB University", year: 2023 },
        ],
    },
    languages: {
        title: "Idiomas",
        items: [
            { name: "Português", level: "Nativo" },
            { name: "Inglês", level: "Profissional (C1)" },
        ],
    },
};

const profiles = {
    en: english_profile,
    pt: portuguese_profile,
};

export function useProfile() {
    const language = useLanguage();
    return profiles[language] ?? english_profile;
}

export function useProfileLinks(){
    return profileLinks;
}