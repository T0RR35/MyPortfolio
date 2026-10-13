import { useEffect, useId, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import GeminiChat from "./GeminiChat";
import "./ChatPanel.css";

const STORAGE_KEY = "chat-open";
const SEEN_KEY = "chat-launcher-seen";

// Telas em que o chat é uma camada por cima da página (mesmo breakpoint do CSS)
const OVERLAY_QUERY = "(max-width: 1279px)";

// O brilho chamativo do botão só aparece até o visitante clicar nele a primeira vez
function getInitialSeen(): boolean {
    try {
        return localStorage.getItem(SEEN_KEY) === "true";
    } catch {
        return false;
    }
}

// Abre sozinho só em telas largas (onde cabe ao lado do conteúdo)
function getInitialOpen(): boolean {
    return false;
}

/**
 * Casca do painel lateral: lembra se está aberto, mostra o botão de abrir
 * quando minimizado e esconde o chat (sem desmontar) ao minimizar.
 */
export default function ChatPanel() {
    const panelId = useId();
    const [open, setOpen] = useState(getInitialOpen);
    const [seen, setSeen] = useState(getInitialSeen);
    const panelRef = useRef<HTMLDivElement>(null);
    const launcherRef = useRef<HTMLButtonElement>(null);
    // Para onde levar o foco depois da próxima abertura/minimização.
    // Só é preenchido por um clique do usuário, então ao carregar a página
    const focusTarget = useRef<"panel" | "launcher" | null>(null);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, String(open));
        } catch {
            /* ignora */
        }
    }, [open]);

    // Chat aberto como camada: trava a rolagem da página que está por baixo
    useEffect(() => {
        const media = window.matchMedia(OVERLAY_QUERY);
        const root = document.documentElement;
        const update = () => root.classList.toggle("chat-scroll-lock", open && media.matches);

        update();
        media.addEventListener("change", update);
        return () => {
            media.removeEventListener("change", update);
            root.classList.remove("chat-scroll-lock");
        };
    }, [open]);

    useEffect(() => {
        if (focusTarget.current === "panel") {
            panelRef.current?.querySelector("textarea")?.focus();
        } else if (focusTarget.current === "launcher") {
            launcherRef.current?.focus();
        }
        focusTarget.current = null;
    }, [open]);

    const handleMinimize = () => {
        focusTarget.current = "launcher";
        setOpen(false);
    };

    const handleLaunch = () => {
        focusTarget.current = "panel";
        setOpen(true);
        if (!seen) {
            setSeen(true);
            try {
                localStorage.setItem(SEEN_KEY, "true");
            } catch {
                /* ignora */
            }
        }
    };

    return (
        <aside className={`chat ${open ? "chat--open" : "chat--minimized"}`} aria-label="Chat">
            {!open && (
                <button
                    ref={launcherRef}
                    type="button"
                    className={`chat__launcher${seen ? "" : " chat__launcher--attention"}`}
                    onClick={handleLaunch}
                    aria-expanded={false}
                    aria-controls={panelId}
                    aria-label="Abrir chat"
                    title="Abrir chat"
                >
                    <Sparkles size={22} aria-hidden="true" />
                </button>
            )}

            <div id={panelId} ref={panelRef} className="chat__panel" hidden={!open}>
                <GeminiChat onMinimize={handleMinimize} />
            </div>
        </aside>
    );
}