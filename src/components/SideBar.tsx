import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import "./SideBar.css";
import { switchLanguage, useLanguage } from "@/utils/languageSwitcher"
import { useLinks } from "@/data/navLinks";

const TEXT = {
    en: {
        visitor: "Visitor",
        lightMode: "Light mode",
        darkMode: "Dark mode",
        toLight: "Switch to light theme",
        toDark: "Switch to dark theme",
        viewProfile: "View profile",
        mainNav: "Main",
    },
    pt: {
        visitor: "Visitante",
        lightMode: "Modo claro",
        darkMode: "Modo escuro",
        toLight: "Mudar para tema claro",
        toDark: "Mudar para tema escuro",
        viewProfile: "Ver perfil",
        mainNav: "Principal",
    },
};

export default function Sidebar() {
    const links = useLinks();
    const language = useLanguage()
    const t = TEXT[language as "en" | "pt"] ?? TEXT.en;
    const [dark, setDark] = useState(
        () => localStorage.getItem("theme") !== "light"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <div className="sidebar-inner">
            <div className="brand">
                <img className="brand__logo" src="/logo-png.png" alt="RT" />

                <div className="lang-switch-wrap" role="group" aria-label="Idioma / Language">
                    <button
                        type="button"
                        className="lang-switch"
                        data-language={language}
                        onClick={switchLanguage}
                        aria-label="Switch language / Trocar idioma"
                    >
                        <span className="lang-switch__thumb" aria-hidden="true" />
                        <span className={`lang-switch__btn${language === "en" ? " lang-switch__btn--active" : ""}`}>EN</span>
                        <span className={`lang-switch__btn${language === "pt" ? " lang-switch__btn--active" : ""}`}>PT</span>
                    </button>
                </div>
            </div>

            <nav className="sidebar-nav" aria-label="Principal">
                {links.map(({ label, to, icon: Icon, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        aria-label={label}
                        className={({ isActive }) =>
                            `nav-link${isActive ? " nav-link--active" : ""}`
                        }
                    >
                        <span className="nav-link__icon">
                            <Icon size={20} />
                        </span>
                        <span className="nav-link__label">{label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <NavLink to="/profile" className="profile-card" aria-label={t.viewProfile}>
                    <img className="profile-card__avatar" src="/visitante.jpg" alt="" />
                    <div className="profile-card__info">
                        <strong>{t.visitor}</strong>
                    </div>
                </NavLink>

                <button
                    type="button"
                    className="theme-btn"
                    onClick={() => setDark((d) => !d)}
                    aria-label={dark ? t.toLight : t.toDark}
                >
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                    <span className="theme-btn__label">{dark ? t.lightMode : t.darkMode}</span>
                </button>
            </div>
        </div>
    );
}