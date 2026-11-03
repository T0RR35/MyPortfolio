import { useIsDark } from "@/hooks/useIsDark";
import { useLanguage } from "@/utils/languageSwitcher";
import "./WakatimeWidget.css";

const UID = import.meta.env.VITE_SPOTIFY_UID;

type Mode = "dark" | "light";

const RECENT_THEME: Record<Mode, string> = { dark: "theme=dark", light: "" };
const RECENT_BG: Record<Mode, string> = { dark: "", light: "" };

const ALT = {
    en: "Wakatime stats since 08/31/2026",
    pt: "Status wakatime desde 31/08/2026",
};

const buildUrl = (mode: Mode) => ({
    url:
        `https://helio-github-stats.vercel.app/api/wakatime?username=0567bae2-693c-44f5-a00a-95bfad691d49&custom_title=WakaTime+Stats&line_height=25&layout=compact&display_format=time&disable_animations=false&langs_count=14&${RECENT_THEME[mode]}${RECENT_BG[mode]}`
});

const URL: Record<Mode, ReturnType<typeof buildUrl>> = {
    dark: buildUrl("dark"),
    light: buildUrl("light"),
};

export default function WakatimeWidgets() {
    const dark = useIsDark();
    const language = useLanguage();
    const alt = ALT[language as "en" | "pt"] ?? ALT.en;
    const active: Mode = dark ? "dark" : "light";

    return (
        <div className="wakatime">
            {(["dark", "light"] as Mode[]).map((mode) => (
                <div
                    key={mode}
                    className="wakatime__set"
                    data-active={mode === active}
                    aria-hidden={mode !== active}
                >
                    <img className="wakatime__widget" src={URL[mode].url} alt={alt} referrerPolicy="no-referrer" />
                </div>
            ))}
        </div>
    );
}