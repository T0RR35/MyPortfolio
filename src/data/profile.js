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
            value: "2",
            label: "outra label"
        },
        {
            value: "12",
            label: "outra label"
        },
        {
            value: "7",
            label: "outra label"
        },
    ],
    about: {
        title: "About",
        text: "Currently, I'm pursuing a degree in Software Engineering at PUC Minas. I also hold a Technical degree (2023–2025) in Information Technology from the Federal Center for Technological Education of Minas Gerais (CEFET-MG). I have 1 year of professional experience in software development and previously worked as a Software Development Intern at the Belo Horizonte City Council, where I worked as a Full-Stack Developer using Django and Docker for a FullStack web application development."
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
                description: "descricaodescricaodescricaodescricaodescricaodescricao",
            },
            {
                title: "Information Technology Technical Degree",
                organization: "Federal Center for Technological Education of Minas Gerais (CEFET-MG)",
                period: "2023 — 2025",
                description: "descricaodescricaodescricaodescricaodescricaodescricao",
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
            },
            {
                name: "Spanish",
                level: "Intermediate (B1)"
            },
        ],
    },

};

var profile = english_profile

export default profile;