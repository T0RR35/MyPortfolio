import {
    SiTypescript,
    SiPython,
    SiOpenjdk,
    SiJavascript,
    SiCplusplus,
    SiC,
    SiDjango,
    SiSpringboot,
    SiReact,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiDocker,
    SiBitcoin,
} from "react-icons/si";
import { Webhook, DatabaseZap } from "lucide-react";
import type { GlobeSkill } from "../components/SkillsGlobe";

export const globeSkills: GlobeSkill[] = [
    // languages
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", link: "https://www.typescriptlang.org/" },
    { name: "Python", icon: SiPython, color: "#3776AB", link: "https://www.python.org/" },
    { name: "Java", icon: SiOpenjdk, color: "#ED8B00", link: "https://openjdk.org/" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", link: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { name: "C++", icon: SiCplusplus, color: "#00599C", link: "https://isocpp.org/" },
    { name: "C", icon: SiC, color: "#A8B9CC", link: "https://en.cppreference.com/w/c" },

    // frameworks
    { name: "Django", icon: SiDjango, color: "#44B78B", link: "https://www.djangoproject.com/" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", link: "https://spring.io/projects/spring-boot" },
    { name: "React", icon: SiReact, color: "#61DAFB", link: "https://react.dev/" },

    // databases
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", link: "https://www.postgresql.org/" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", link: "https://www.mongodb.com/" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", link: "https://www.mysql.com/" },

    // tools
    { name: "Docker", icon: SiDocker, color: "#2496ED", link: "https://www.docker.com/" },

    // concepts
    { name: "API", icon: Webhook, color: "#00ff9d", link: "https://developer.mozilla.org/docs/Glossary/API" },
    { name: "ORM", icon: DatabaseZap, color: "#F59E0B", link: "https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping" },
    { name: "Blockchain", icon: SiBitcoin, color: "#F7931A", link: "https://en.wikipedia.org/wiki/Blockchain" },
];