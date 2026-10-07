import { Home, User, FolderGit2, Briefcase, Quote, Mail } from "lucide-react";
import { useLanguage } from "@/utils/languageSwitcher";

const english_links = [
    { label: "Home", to: "/", icon: Home, end: true },
    { label: "Profile", to: "/profile", icon: User },
    { label: "Projects", to: "/projects", icon: FolderGit2 },
    { label: "Experience", to: "/experience", icon: Briefcase },
    { label: "Reviews", to: "/reviews", icon: Quote },
    { label: "Contact", to: "/contact", icon: Mail },
];

const portuguese_links = [
    { label: "Início", to: "/", icon: Home, end: true },
    { label: "Perfil", to: "/profile", icon: User },
    { label: "Projetos", to: "/projects", icon: FolderGit2 },
    { label: "Experiência", to: "/experience", icon: Briefcase },
    { label: "Depoimentos", to: "/reviews", icon: Quote },
    { label: "Contato", to: "/contact", icon: Mail },
];

const links = {
    en: english_links,
    pt: portuguese_links,
};

export function useLinks() {
    const language = useLanguage();
    return links[language] ?? english_links;
}