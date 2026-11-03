import { useIsDark } from "@/hooks/useIsDark";
import { useLanguage } from "@/utils/languageSwitcher";
import "./GithubStatsWidget.css";

type Mode = "dark" | "light";
type Language = "en" | "pt";

const LOCALE: Record<Language, { stats: string; streak: string }> = {
    en: { stats: "en", streak: "en" },
    pt: { stats: "pt-br", streak: "pt_BR" },
};

const TEXT: Record<Language, { stats: string; streak: string; title: string }> = {
    en: {
        stats: "GitHub stats",
        streak: "GitHub contribution streak",
        title: "GitHub+Stats",
    },
    pt: {
        stats: "Estatísticas do GitHub",
        streak: "Sequência de contribuições no GitHub",
        title: "Estatísticas+do+GitHub",
    },
};

const THEME: Record<Mode, { card: string; text: string }> = {
    dark: { card: "dark", text: "ffffff" },
    light: { card: "default", text: "1f2937" },
};

const buildUrls = (mode: Mode, language: Language) => {
    const locale = LOCALE[language];
    const theme = THEME[mode];

    return {
        stats:
            `https://helio-github-stats.vercel.app/api?username=T0RR35&custom_title=${TEXT[language].title}&theme=${theme.card}&title_color=fb8c00&text_color=${theme.text}` +
            `&icon_color=fb8c00&ring_color=fb8c00&border_color=e4e2e2&hide_border=false&locale=${locale.stats}&border_radius=4.5&card_width=466&hide_title=false` +
            `&hide_rank=false&rank_icon=default&show_icons=true&include_all_commits=false&line_height=25&text_bold=true&disable_animations=false&number_format=short`,
        streak:
            `https://streak-stats.demolab.com?user=T0RR35&theme=${theme.card}&locale=${locale.streak}&date_format=j%20M%5B%20Y%5D&v=2`,
    };
};

export default function GithubWidget() {
    const dark = useIsDark();
    const language = useLanguage() as Language;
    const text = TEXT[language] ?? TEXT.en;
    const active: Mode = dark ? "dark" : "light";
    const urls: Record<Mode, ReturnType<typeof buildUrls>> = {
        dark: buildUrls("dark", language),
        light: buildUrls("light", language),
    };

    return (
        <div className="github">
            {(["dark", "light"] as Mode[]).map((mode) => (
                <div
                    key={mode}
                    className="github__set"
                    data-active={mode === active}
                    aria-hidden={mode !== active}
                >
                    <img className="github__widget" src={urls[mode].stats} alt={text.stats} referrerPolicy="no-referrer"/>
                    <img className="github__widget" src={urls[mode].streak} alt={text.streak} referrerPolicy="no-referrer"/>
                </div>
            ))}
        </div>
    );
}
