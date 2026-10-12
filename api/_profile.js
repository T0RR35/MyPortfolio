// api/_profile.js
// Dados puros do portfólio para a função /api/gemini.
// O "_" no começo do nome impede a Vercel de tratar este arquivo como uma função.
// Sem React, sem hooks, sem alias "@/" e sem ícones.
// Estou duplicando os dados da pasta src/data, mas não consigo usar os já prontos porque hooks só funcionam dentro de componentes React, e na Vercel não existe React rodando

/* ───────────────────────── LINKS ───────────────────────── */

const profileLinks = [
    { label: "GitHub", href: "https://github.com/T0RR35" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rafaeltorresmodesto/" },
    { label: "WhatsApp", href: "https://wa.me/5531989790048" },
    { label: "E-mail", href: "mailto:modestorresrafael@gmail.com" },
];

/* ───────────────────────── PERFIL ───────────────────────── */
const profile = {
    subtitle: "Engenheiro de Software Backend",
    location: "Belo Horizonte, MG, Brasil",
    age: 19,
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
const experience = {
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

const projects = {
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

/* ───────────────────────── CURIOSIDADES ───────────────────────── */
const curiosities = 
    [
        "Meu cantor favorito é Djavan, astro da MPB", 
        "Minhas bandas favoritas são Metallica e Megadeth",
        "Os únicos animes que já vi são: One Piece (acompanho até hoje) e Naruto",
        "Eu toco guitarra e violão",
        "Sou torcedor do Clube Atlético Mineiro",
        "Já trabalhei como professor particular de matemática",
        "Já fui premiado em 3 olimpíadas de matemática e uma de física durante minha vida",
        "Pratico inglês desde os 8 anos de idade, quando entrei em um curso particular",
        "Se eu não entrasse na área de TI eu provavelmente entraria em matemática ou física",
    ]

/* ───────────────────────── EXPORTS ───────────────────────── */
export { profileLinks };

// Campos que só servem à interface e gastam tokens à toa
const UI_ONLY = new Set(["logo", "image_path", "gif_path", "eyebrow", "labels", "toggle"]);
const clean = (data) => JSON.stringify(data, (k, v) => (UI_ONLY.has(k) ? undefined : v), 2);

export const PERFIL = [
    "# QUEM SOU",
    clean(profile),
    "# EXPERIÊNCIA",
    clean(experience),
    "# PROJETOS",
    clean(projects),
    "# CONTATO",
    profileLinks.map((x) => `${x.label}: ${x.href}`).join("\n"),
    "# CURIOSIDADES (só mencione se a pessoa perguntar)",
    curiosities.map((c) => `- ${c}`).join("\n"),
].join("\n\n");

// Mantém a função que o _gemini.js já importa, sem precisar mexer lá
export const getPerfil = () => PERFIL;