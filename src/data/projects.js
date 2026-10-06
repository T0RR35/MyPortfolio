import { image } from "framer-motion/client";

const english_projects = {
    title: "Projects",
    items: [
        {
            name: "This Portfolio!",
            status: "On constant update",
            description:
                "My personal engineering portfolio, built as a data-driven React + TypeScript app: every section renders from typed content files, with a reusable component system, animated route transitions, and a bilingual setup.",
            image_path: "../../public/",
            gif_path: "../../public/",
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
            image_path: "../../public/desert-strike-img.png",
            gif_path: "../../public/desert-strike-gif.gif",
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
            image_path: "../../public/king-kong-img.png",
            gif_path: "../../public/king-kong-gif.gif",
            role: "Creator & maintainer",
            period: "2024",
            stack: ["C++"],
            repo: "https://github.com/T0RR35/King-Kong-Game",
            demo: "",
        },
    ],
};

var projects = english_projects

export default projects;