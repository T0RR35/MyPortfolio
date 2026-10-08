import { MapPin } from "lucide-react";
import "./ProfileHeader.css";
import { useProfileLinks } from "@/data/profile";
import { useProfile } from "@/data/profile";

export default function ProfileHeader() {
    const profile = useProfile();
    const profileLinks = useProfileLinks();

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
                    <p className="profile-header__title">{profile["subtitle"]}</p>
                    <p className="profile-header__handle">@rafael.dev</p>
                    <p className="profile-header__location">
                        <MapPin size={14} aria-hidden="true" />
                        {profile["location"]}
                    </p>
                </div>

                <nav className="profile-header__links" aria-label="Links de contato">
                    {profileLinks.map(({ label, href, icon: Icon }) => (
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