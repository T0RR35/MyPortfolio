import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import "./SideBar.css";
import { switchLanguage, useLanguage } from "@/utils/languageSwitcher"
import { useLinks } from "@/data/navLinks";

export default function Sidebar() {
    const links = useLinks();
    const language = useLanguage()
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
                <div className="brand__logo">R</div>
                <span className="brand__name">Portfolio</span>
                <div className="lang-switch" role="group" aria-label="Idioma / Language">
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
                <NavLink to="/profile" className="profile-card" aria-label="Ver perfil">
                    <img className="profile-card__avatar" src="/visitante.jpg" alt="" />
                    <div className="profile-card__info">
                        <strong>Visitante</strong>
                        {/*<span>modestorresrafael@gmail.com</span>*/}
                    </div>
                </NavLink>

                <button
                    type="button"
                    className="theme-btn"
                    onClick={() => setDark((d) => !d)}
                    aria-label={dark ? "Mudar para tema claro" : "Mudar para tema escuro"}
                >
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                    <span className="theme-btn__label">{dark ? "Light mode" : "Dark mode"}</span>
                </button>
            </div>
        </div>
    );
}