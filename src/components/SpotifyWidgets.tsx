import { useIsDark } from "@/hooks/useIsDark";
import { useLanguage } from "@/utils/languageSwitcher";
import "./SpotifyWidgets.css";

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
    nowPlaying:
        `https://spotify-github-profile.kittinanx.com/api/view?uid=${UID}` +
        `&cover_image=true&theme=default&show_offline=false` +
        `&background_color=${BACKGROUND[mode]}&interchange=false`,
    recent:
        `https://spotify-recently-played.jeffreyca.workers.dev/svg?user=${UID}` +
        `&theme=${RECENT_THEME[mode]}${RECENT_BG[mode]}` +
        `&unique=1&username=off&count=7&width=540`,
});

const URLS: Record<Mode, ReturnType<typeof buildUrls>> = {
    dark: buildUrls("dark"),
    light: buildUrls("light"),
};

export default function SpotifyWidgets() {
    const dark = useIsDark();
    const language = useLanguage();
    const alt = ALT[language as "en" | "pt"] ?? ALT.en;
    const active: Mode = dark ? "dark" : "light";

    return (
        <div className="spotify">
            {(["dark", "light"] as Mode[]).map((mode) => (
                <div
                    key={mode}
                    className="spotify__set"
                    data-active={mode === active}
                    aria-hidden={mode !== active}
                >
                    <img className="spotify__widget" src={URLS[mode].nowPlaying} alt={alt.playing} />
                    <img className="spotify__widget" src={URLS[mode].recent} alt={alt.recent} />
                </div>
            ))}
        </div>
    );
}