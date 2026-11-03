import { useIsDark } from "@/hooks/useIsDark";
import { useLanguage } from "@/utils/languageSwitcher";
import "./GithubStatsWidget.css";

const UID = import.meta.env.VITE_SPOTIFY_UID;

type Mode = "dark" | "light";

const BACKGROUND: Record<Mode, string> = { dark: "121212", light: "A58B72" };
const RECENT_THEME: Record<Mode, string> = { dark: "spotify", light: "light" };
const RECENT_BG: Record<Mode, string> = { dark: "", light: "&bg_color=A58B72" };

const ALT = {
    en: { playing: "Now playing on Spotify", recent: "Recently played on Spotify" },
    pt: { playing: "Tocando agora no Spotify", recent: "Ouvidas recentemente no Spotify" },
};

const buildUrls = (mode: Mode) => ({
    stats:
        `https://helio-github-stats.vercel.app/api?username=T0RR35&custom_title=GitHub+Stats&theme=dark&title_color=fb8c00&text_color=ffffff` +
        `&icon_color=fb8c00&ring_color=fb8c00&border_color=e4e2e2&hide_border=false&locale=en&border_radius=4.5&card_width=466&hide_title=false` +
        `&hide_rank=false&rank_icon=default&show_icons=true&include_all_commits=false&line_height=25&text_bold=true&disable_animations=false&number_format=short`,
    streak:
        `https://streak-stats.demolab.com?user=T0RR35&theme=dark&locale=en&date_format=j%20M%5B%20Y%5D&v=2`,
});

const URLS: Record<Mode, ReturnType<typeof buildUrls>> = {
    dark: buildUrls("dark"),
    light: buildUrls("light"),
};

export default function GithubWidget() {
    const dark = useIsDark();
    const language = useLanguage();
    const alt = ALT[language as "en" | "pt"] ?? ALT.en;
    const active: Mode = dark ? "dark" : "light";

    return (
        <div className="github">
            {(["dark", "light"] as Mode[]).map((mode) => (
                <div
                    key={mode}
                    className="github__set"
                    data-active={mode === active}
                    aria-hidden={mode !== active}
                >
                    <img className="github__widget" src={URLS[mode].stats} alt={alt.playing} referrerPolicy="no-referrer"/>
                    <img className="github__widget" src={URLS[mode].streak} alt={alt.recent} referrerPolicy="no-referrer"/>
                </div>
            ))}
        </div>
    );
}