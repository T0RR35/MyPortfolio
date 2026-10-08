import { useLanguage } from "@/utils/languageSwitcher";

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

const english_experience: ExperienceData = {
    eyebrow: "Career pathing",
    title: "Professional Experience",
    subtitle:
        "A chronological thread through my professionals experiences — expand each entry for responsibilities and impact.",
    labels: {
        responsibilities: "Responsibilities",
        achievements: "Key achievements",
        toggle: "Show details",
    },
    items: [
        {
            role: "Blockchain & Web3 Developer Intern",
            tag: "Internship · Hybrid",
            company: "Minas Gerais Information Technology Company (PRODEMGE)",
            location: "Belo Horizonte, MG, Brazil",
            period: "Oct 2026 — present",
            description:
                "Building blockchain and Web3 solutions: smart contracts on Hyperledger Besu and decentralized interfaces in React and TypeScript, while contributing to the technical architecture of on-chain and off-chain data.",
            responsibilities: [
                "Develop, test, and deploy smart contracts in Solidity on Hyperledger Besu.",
                "Design and build dApps with Web3 integration (REST, RPC, and WebSocket), focused on usability, security, and performance.",
                "Build decentralized interfaces with React and TypeScript.",
                "Interact with blockchain network APIs using Web3.js, Ethers.js, and Hyperledger SDKs.",
                "Take part in defining the technical architecture, including on-chain and off-chain data.",
            ],
            achievements: [
                "Smart contracts covered by automated tests before every deployment.",
                "Front-end integrated end to end with the blockchain network.",
            ],
            stack: ["Solidity", "Hyperledger Besu", "Web3.js", "Ethers.js", "React", "TypeScript"],
            logo: "./prodemge.png",
        },
        {
            role: "Fullstack Software Engineering Intern",
            tag: "Internship · On-site",
            company: "Belo Horizonte City Council (CMBH)",
            location: "Belo Horizonte, MG, Brazil",
            period: "Mar 2026 — Aug 2026",
            description:
                "Worked on a corporate web system for managing demands, goals, and indicators of the IT department, replacing manual processes with a centralized, automated solution. Took part from application modeling to the implementation of features, APIs, and business rules, delivering a solution validated by end users.",
            responsibilities: [
                "Built a web application with Python, Django, PostgreSQL, and Docker.",
                "Modeled the relational database and used Django's ORM for data access and persistence.",
                "Developed and consumed REST APIs.",
                "Implemented business rules, validations, and backend logic.",
                "Created features for managing demands, goals, and indicators, including modules for automated reports, metric calculations, and demand prioritization.",
                "Used Git for version control and collaborative, agile development practices.",
                "Validated the solution with IT department users, incorporating their feedback during development.",
            ],
            achievements: [
                "Automated processes that were previously done manually.",
                "Reduced rework through automatic report generation, calculations, and demand organization.",
                "Centralized information in a single system, increasing data reliability.",
                "Faster indicator tracking and decision-making.",
                "Delivered a solution validated and approved by the IT department supervisor.",
            ],
            stack: ["Python", "Django", "PostgreSQL", "Docker", "JavaScript", "REST APIs", "Git"],
            logo: "./cmbh.png",
        },
    ],
};

const portuguese_experience: ExperienceData = {
    eyebrow: "Trajetória",
    title: "Experiência Profissional",
    subtitle:
        "Uma linha do tempo das minhas experiências profissionais — expanda cada item para ver responsabilidades e impacto.",
    labels: {
        responsibilities: "Responsabilidades",
        achievements: "Principais conquistas",
        toggle: "Mostrar detalhes",
    },
    items: [
        {
            role: "Estagiário Desenvolvedor Blockchain & Web3",
            tag: "Estágio · Híbrido",
            company: "Companhia de Tecnologia da Informação de Minas Gerais (PRODEMGE)",
            location: "Belo Horizonte, MG, Brasil",
            period: "Out 2026 — atual",
            description:
                "Desenvolvo soluções blockchain e Web3: smart contracts em Hyperledger Besu e interfaces descentralizadas em React e TypeScript, contribuindo para a arquitetura técnica de dados on-chain e off-chain.",
            responsibilities: [
                "Desenvolvo, testo e implanto smart contracts em Solidity na rede Hyperledger Besu.",
                "Projeto e desenvolvo dApps com integração Web3 (REST, RPC e WebSocket), com foco em usabilidade, segurança e desempenho.",
                "Construo interfaces descentralizadas com React e TypeScript.",
                "Interajo com APIs de redes blockchain usando Web3.js, Ethers.js e SDKs Hyperledger.",
                "Participo da definição da arquitetura técnica, incluindo dados on-chain e off-chain.",
            ],
            achievements: [
                "Smart contracts cobertos por testes automatizados antes de cada implantação.",
                "Front-end integrado de ponta a ponta com a rede blockchain.",
            ],
            stack: ["Solidity", "Hyperledger Besu", "Web3.js", "Ethers.js", "React", "TypeScript"],
            logo: "./prodemge.png",
        },
        {
            role: "Estagiário Fullstack de Engenharia de Software",
            tag: "Estágio · Presencial",
            company: "Câmara Municipal de Belo Horizonte (CMBH)",
            location: "Belo Horizonte, MG, Brasil",
            period: "Mar 2026 — Ago 2026",
            description:
                "Atuei no desenvolvimento de um sistema web corporativo voltado à gestão de demandas, metas e indicadores da área de TI, substituindo processos manuais por uma solução centralizada e automatizada. Participei desde a modelagem da aplicação até a implementação de funcionalidades, APIs e regras de negócio, entregando uma solução validada pelos usuários finais.",
            responsibilities: [
                "Desenvolvi uma aplicação web com Python, Django, PostgreSQL e Docker.",
                "Modelei o banco de dados relacional e usei o ORM do Django para manipulação e persistência de dados.",
                "Desenvolvi e consumi APIs REST.",
                "Implementei regras de negócio, validações e lógica de backend.",
                "Criei funcionalidades de gestão de demandas, metas e indicadores, incluindo módulos de relatórios automatizados, cálculo de métricas e priorização de demandas.",
                "Usei Git para versionamento e práticas de desenvolvimento colaborativo e ágil.",
                "Validei a solução com os usuários da área de TI, incorporando feedbacks durante o desenvolvimento.",
            ],
            achievements: [
                "Automatização de processos que antes eram feitos manualmente.",
                "Redução de retrabalho com geração automática de relatórios, cálculos e organização de demandas.",
                "Centralização das informações em um único sistema, aumentando a confiabilidade dos dados.",
                "Mais agilidade no acompanhamento de indicadores e na tomada de decisão.",
                "Entrega de uma solução validada e aprovada pelo supervisor da área de TI.",
            ],
            stack: ["Python", "Django", "PostgreSQL", "Docker", "JavaScript", "APIs REST", "Git"],
            logo: "./cmbh.png",
        },
    ],
};

const experience: Record<"en" | "pt", ExperienceData> = {
    en: english_experience,
    pt: portuguese_experience,
};

export function useExperience(): ExperienceData {
    const language = useLanguage();
    return experience[language as "en" | "pt"] ?? english_experience;
}