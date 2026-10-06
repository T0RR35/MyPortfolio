import {
    title
} from "framer-motion/client";
import {
    Languages
} from "lucide-react";

const english_profile = {
    subtitle: "Backend Software Engeneer",
    location: "Belo Horizonte, MG, Brazil",
    stats: [{
            value: "4+",
            label: "Years coding"
        },
        {
            value: "1+",
            label: "Year professional experience"
        },
        {
            value: "5",
            label: "Projects shipped"
        },
        {
            value: "4",
            label: "Systems in prod"
        },
    ],
    about: {
        title: "About",
        text: "I'm a Software Engineering student focused on backend development and software architecture. I enjoy building practical solutions, working with APIs and databases, and continuously learning new technologies and better ways to build software."
    },
    techs: {
        title: "Technical DNA — Skill matrix",
        Languages: ["TypeScript", "Python", "Java", "Javascript", "C++", "C"],
        frameworks: ["Django", "Spring Boot", "React"],
        databases: ["PostgreSQL", "MongoDB", "MySQL"],
        tools: ["Docker"],
        concepts: ["API", "ORM", "Block Chain"]
    },
    education: {
        title: "Education",
        items: [{
                title: "Software Engeneering",
                organization: "Pontifical Catholic University of Minas Gerais (PUC-MG)",
                period: "2026 — 2029 (expected)",
                description: "Software development, engineering practices, and system design.",
            },
            {
                title: "Information Technology Technical Degree",
                organization: "Federal Center for Technological Education of Minas Gerais (CEFET-MG)",
                period: "2023 — 2025",
                description: "Programming, databases, web development, and software engineerin.",
            },
        ]
    },
    certifications: {
        title: "Certifications",
        items: [{
                title: "AWS Certified Solutions Architect — Associate",
                issuer: "Amazon",
                year: 2025
            },
            {
                title: "CKA: Certified Kubernetes Administrator",
                issuer: "CNCF",
                year: 2024
            },
            {
                title: "MongoDB Associate Developer",
                issuer: "MongoDB University",
                year: 2023
            },
        ],
    },
    languages: {
        title: "Languages",
        items: [{
                name: "Portuguese",
                level: "Native"
            },
            {
                name: "English",
                level: "Professional (C1)"
            }
        ],
    },
};

var profile = english_profile

export default profile;