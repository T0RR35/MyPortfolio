import { MapPin, Globe, Mail } from "lucide-react";
import "./ProfileHeader.css";

const PROFILE = { /* COLOCAR ISSO NO /DATA*/
    links: [
        { label: "GitHub", href: "https://github.com/", icon: Mail },
        { label: "LinkedIn", href: "https://linkedin.com/", icon: Globe },
        { label: "Website", href: "https://example.com/", icon: Globe },
        { label: "E-mail", href: "mailto:contato@example.com", icon: Mail },
    ],
};

export default function ProfileHeader() {
    const { name, title, handle, location, links } = PROFILE;

    return (
        <header className="profile-header">
            <div className="profile-header__banner">
                <img src="/profile-banner.png" alt="" />
            </div>

            <div className="profile-header__body">
                <img
                    className="profile-header__avatar"
                    src="/avatar.jpg"
                />

                <div className="profile-header__identity">
                    <h1 className="profile-header__name">Rafael Torres</h1>
                    <p className="profile-header__title">Backend Software Engineer</p>
                    <p className="profile-header__handle">@modestorresrafael</p>
                    <p className="profile-header__location">
                        <MapPin size={14} aria-hidden="true" />
                        Belo Horizonte, MG, Brazil
                    </p>
                </div>

                <nav className="profile-header__links" aria-label="Links de contato">
                    {links.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            className="profile-header__link"
                            href={href}
                            aria-label={label}
                            title={label}
                            {...(href.startsWith("http") && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            })}
                        >
                            <Icon size={18} aria-hidden="true" />
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}