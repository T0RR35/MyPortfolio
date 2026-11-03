import { useEffect, useState } from "react";
import { useLanguage } from "@/utils/languageSwitcher";
import "./ChessWidgets.css";

const USER = import.meta.env.VITE_CHESS_USER as string;
const API = "https://api.chess.com/pub/player";

const MODES = ["rapid", "daily", "blitz", "bullet"] as const;
type Mode = (typeof MODES)[number];

interface Rating {
    mode: Mode;
    rating: number;
    best?: number;
    win: number;
    loss: number;
    draw: number;
}

interface Profile {
    username: string;
    avatar?: string;
    url: string;
}

const TEXT = {
    en: {
        modes: { rapid: "Rapid", daily: "Daily", blitz: "Blitz", bullet: "Bullet" },
        record: "W/L/D",
        best: "Best",
    },
    pt: {
        modes: { rapid: "Rápida", daily: "Diário", blitz: "Blitz", bullet: "Bullet" },
        record: "V/D/E",
        best: "Melhor",
    },
};

function ModeIcon({ mode }: { mode: Mode }) {
    const common = {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        "aria-hidden": true,
    };

    switch (mode) {
        case "rapid": 
            return (
                <svg {...common}>
                    <circle cx="12" cy="13.5" r="7.5" />
                    <path d="M12 13.5V9M9.5 2.5h5" />
                </svg>
            );
        case "daily": 
            return (
                <svg {...common}>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
                </svg>
            );
        case "blitz":
            return (
                <svg {...common} fill="currentColor">
                    <path d="M13 2 4.5 13.5H11L10 22l9-12h-6.5z" />
                </svg>
            );
        case "bullet":
            return (
                <svg {...common} >
                    <path d="m7.17 15.3 1.43 1.47-8.27 6.9zm-6.87 2.3 4.5-6 .9 2zm10.47-7.5c3.47-3.6 5.93-5.2 8.7-6.4-2.4 0-5.3.37-9.8 4.6.03.5.7 1.47 1.1 1.8zm11.06-7.93s.23 1.1.23 2.77c0 2.67-.67 6.83-4.17 10.33l-2.17 2.17c-.67.67-1.33.6-2.13.27l-7.47 6.3 9.8-12.17-5.23 4.03c-.43-.4-.93-.83-1.33-1.23-1.73-1.7-4.13-5-2.77-6.37l2.2-2.13c3.53-3.5 7.63-4.2 10.3-4.2 1.63 0 2.73.23 2.73.23zm0 0"></path>
                </svg>
            );
    }
}

function PawnIcon() {
    return (
        <svg className="chess__logo" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <circle cx="12" cy="6.5" r="3.5" />
            <path d="M9.2 11h5.6c0 2-.8 3.3-2 4.5l1.2 3.5H10l1.2-3.5C10 14.3 9.2 13 9.2 11z" />
            <rect x="6.5" y="19" width="11" height="2.5" rx="1" />
        </svg>
    );
}

async function getJson<T>(url: string, signal: AbortSignal): Promise<T> {
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(String(res.status));
    return res.json();
}

async function load(signal: AbortSignal) {
    const user = USER.toLowerCase();
    const [profile, stats] = await Promise.all([
        getJson<any>(`${API}/${user}`, signal),
        getJson<any>(`${API}/${user}/stats`, signal),
    ]);

    const ratings: Rating[] = MODES.flatMap((mode) => {
        const s = stats[`chess_${mode}`];
        if (!s?.last) return [];
        return [
            {
                mode,
                rating: s.last.rating,
                best: s.best?.rating,
                win: s.record?.win ?? 0,
                loss: s.record?.loss ?? 0,
                draw: s.record?.draw ?? 0,
            },
        ];
    });

    return {
        profile: {
            username: profile.username,
            avatar: profile.avatar,
            url: profile.url,
        } as Profile,
        ratings,
    };
}

export default function ChessCard() {
    const language = useLanguage();
    const t = TEXT[language as "en" | "pt"] ?? TEXT.en;
    const [data, setData] = useState<Awaited<ReturnType<typeof load>> | null>(null);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        load(controller.signal)
            .then(setData)
            .catch((e) => e?.name !== "AbortError" && setFailed(true));
        return () => controller.abort();
    }, []);

    if (failed) return null;

    return (
        <div className="chess" aria-busy={!data}>
            <header className="chess__top">
                <div className="chess__brand">
                    <PawnIcon />
                    <strong>Chess.com</strong>
                </div>

                <a
                    className="chess__profile"
                    href={data?.profile.url ?? `https://www.chess.com/member/${USER}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {data?.profile.avatar && (
                        <img className="chess__avatar" src={data.profile.avatar} alt="" />
                    )}
                    <span>{data?.profile.username ?? USER}</span>
                </a>
            </header>

            <div className="chess__ratings">
                {(data?.ratings ?? []).map((r) => (
                    <div key={r.mode} className="chess__rating" data-mode={r.mode}>
                        <span className="chess__icon">
                            <ModeIcon mode={r.mode} />
                        </span>

                        <div className="chess__main">
                            <span className="chess__mode">{t.modes[r.mode]}</span>
                            <strong className="chess__value">{r.rating}</strong>
                        </div>

                        <div className="chess__meta">
                            <span>
                                {t.record}{" "}
                                <b className="chess__w">{r.win}</b>/
                                <b className="chess__l">{r.loss}</b>/
                                <b className="chess__d">{r.draw}</b>
                            </span>
                            {r.best && (
                                <span>
                                    {t.best} <b>{r.best}</b>
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}