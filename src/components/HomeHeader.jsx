import { Sparkles, MapPin } from "lucide-react";
import "./HomeHeader.css";

export default function HomeHeader() {
    return (
        <header className="home-header">
            <div className="home-header__banner">
                <img src="/banner.jpg" alt="" />
            </div>

            <div className="home-header__body">
                <div className="home-header__top">
                    <img
                        className="home-header__avatar"
                        src="/avatar.jpg"
                    />
                    <div className="home-header__identity">
                        <h1 className="home-header__name">Rafael Torres</h1>
                        <p className="home-header__title">Backend Software Engineer</p>
                    </div>
                </div>

                <p className="home-header__bio">
                    Backend-focused software engineer passionate about distributed systems,
                    clean architecture, and developer experience. Currently turning complex
                    domain problems into reliable, observable services. CS undergraduate ·
                    open to senior-track opportunities.
                </p>

                <ul className="home-header__meta">
                    <li className="home-header__status">
                        <Sparkles size={14} />
                        Building high-scale backends &amp; distributed systems
                    </li>
                    <li>
                        <MapPin size={14} />
                        Belo Horizonte, MG, Brazil · Remote
                    </li>
                </ul>
            </div>
        </header>
    );
}