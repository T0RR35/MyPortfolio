// api/_profile.js
// Dados puros do portfólio para a função /api/gemini.
// O "_" no começo do nome impede a Vercel de tratar este arquivo como uma função.
// Sem React, sem hooks, sem alias "@/" e sem ícones.

/* ───────────────────────── LINKS ───────────────────────── */

const profileLinks = [
    { label: "GitHub", href: "https://github.com/T0RR35" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rafaeltorresmodesto/" },
    { label: "WhatsApp", href: "https://wa.me/5531989790048" },
    { label: "E-mail", href: "mailto:modestorresrafael@gmail.com" },
];

/* ───────────────────────── PERFIL ───────────────────────── */

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

/* ───────────────────────── EXPERIÊNCIA ───────────────────────── */

const english_experience = {
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

const portuguese_experience = {
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

/* ───────────────────────── PROJETOS ───────────────────────── */

const english_projects = {
    eyebrow: "Build log",
    title: "Projects",
    subtitle:
        "A collection of projects showcasing my technical skills, creative problem-solving, and growth as a software engineer.",
    items: [
        {
            name: "This Portfolio!",
            status: "On constant update",
            description:
                "My personal engineering portfolio, built as a data-driven React + TypeScript app: every section renders from typed content files, with a reusable component system, animated route transitions, and a bilingual setup.",
            image_path: "./construction-stripe.png",
            gif_path: "./construction-stripe.png",
            role: "Creator & maintainer",
            period: "2026 — today",
            stack: ["React", "TypeScript"],
            repo: "https://github.com/T0RR35/MyPortfolio",
            demo: "",
        },
        {
            name: "Desert Strike Remake",
            status: "Completed",
            description:
                "Remade the classic Desert Strike from scratch... but online! Helicopter combat, explosions, and 90s nostalgia in pixel art using LibGDX library.",
            image_path: "./desert-strike-img.png",
            gif_path: "./desert-strike-gif.gif",
            role: "Creator & maintainer",
            period: "2025",
            stack: ["Java", "LibGDX", "Distributed Systems"],
            repo: "https://github.com/T0RR35/Desert-Strike-Remake",
            demo: "",
        },
        {
            name: "King Kong Remake",
            status: "Completed",
            description:
                "Remade the classic King Kong from Atari — climb the building, dodge the obstacles thrown by Kong, and rescue the damsel, all rebuilt from scratch in SFML library.",
            image_path: "./king-kong-img.png",
            gif_path: "./king-kong-gif.gif",
            role: "Creator & maintainer",
            period: "2024",
            stack: ["C++"],
            repo: "https://github.com/T0RR35/King-Kong-Game",
            demo: "",
        },
    ],
};

const portuguese_projects = {
    eyebrow: "Build log",
    title: "Projetos",
    subtitle:
        "Uma coleção de projetos que demonstram minhas habilidades técnicas, criatividade na resolução de problemas e evolução como engenheiro de software.",
    items: [
        {
            name: "Esse Portfólio!",
            status: "Em constante atualização",
            description:
                "Meu portfólio pessoal de engenharia, construído como um app React + TypeScript orientado a dados: cada seção é renderizada a partir de arquivos de conteúdo tipados, com um sistema de componentes reutilizáveis, transições de rota animadas e suporte a dois idiomas.",
            image_path: "./construction-stripe.png",
            gif_path: "./construction-stripe.png",
            role: "Criador e mantenedor",
            period: "2026 — hoje",
            stack: ["React", "TypeScript"],
            repo: "https://github.com/T0RR35/MyPortfolio",
            demo: "",
        },
        {
            name: "Desert Strike Remake",
            status: "Concluído",
            description:
                "Refiz o clássico Desert Strike do zero... mas online! Combate de helicóptero, explosões e nostalgia dos anos 90 em pixel art, usando a biblioteca LibGDX.",
            image_path: "./desert-strike-img.png",
            gif_path: "./desert-strike-gif.gif",
            role: "Criador e mantenedor",
            period: "2025",
            stack: ["Java", "LibGDX", "Sistemas Distribuídos"],
            repo: "https://github.com/T0RR35/Desert-Strike-Remake",
            demo: "",
        },
        {
            name: "King Kong Remake",
            status: "Concluído",
            description:
                "Refiz o clássico King Kong do Atari — suba o prédio, desvie dos obstáculos lançados pelo Kong e resgate a donzela, tudo recriado do zero com a biblioteca SFML.",
            image_path: "./king-kong-img.png",
            gif_path: "./king-kong-gif.gif",
            role: "Criador e mantenedor",
            period: "2024",
            stack: ["C++"],
            repo: "https://github.com/T0RR35/King-Kong-Game",
            demo: "",
        },
    ],
};

/* ───────────────────────── CONTATO ───────────────────────── */

const english_contact = {
    eyebrow: "Get in touch",
    title: "Contact",
    subtitle:
        "Recruiters and teams welcome — use the form or reach out directly through any channel below.",
    form: {
        name: { label: "Name", placeholder: "Name" },
        email: { label: "Email", placeholder: "Email" },
        subject: { label: "Subject", placeholder: "Subject" },
        message: { label: "Message", placeholder: "Tell me about the role or opportunity..." },
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Could not send your message. Write directly to",
    },
};

const portuguese_contact = {
    eyebrow: "Fale comigo",
    title: "Contato",
    subtitle:
        "Recrutadores e times são bem-vindos — use o formulário ou fale direto por qualquer um dos canais ao lado.",
    form: {
        name: { label: "Nome", placeholder: "Nome" },
        email: { label: "E-mail", placeholder: "E-mail" },
        subject: { label: "Assunto", placeholder: "Assunto" },
        message: { label: "Mensagem", placeholder: "Conte-me sobre a vaga ou oportunidade..." },
        submit: "Enviar mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada! Responderei em breve.",
        error: "Não foi possível enviar sua mensagem. Escreva direto para",
    },
};

/* ───────────────────────── EXPORTS ───────────────────────── */

export const profile = { en: english_profile, pt: portuguese_profile };
export const experience = { en: english_experience, pt: portuguese_experience };
export const projects = { en: english_projects, pt: portuguese_projects };
export const contact = { en: english_contact, pt: portuguese_contact };
export { profileLinks };

// Campos que só servem à interface e gastam tokens à toa
const UI_ONLY = new Set(["logo", "image_path", "gif_path", "form", "eyebrow", "labels", "toggle"]);
const clean = (data) => JSON.stringify(data, (k, v) => (UI_ONLY.has(k) ? undefined : v), 2);

/**
 * Monta o texto de contexto que vai para o Gemini.
 * @param {"pt" | "en"} lang
 */
export function getPerfil(lang = "pt") {
    const l = lang === "en" ? "en" : "pt";
    const links = profileLinks.map((x) => `${x.label}: ${x.href}`).join("\n");

    return [
        "# QUEM SOU",
        clean(profile[l]),
        "# EXPERIÊNCIA",
        clean(experience[l]),
        "# PROJETOS",
        clean(projects[l]),
        "# CONTATO",
        clean(contact[l]),
        links,
    ].join("\n\n");
}

// Atalho para o idioma padrão
export const PERFIL = getPerfil("pt");