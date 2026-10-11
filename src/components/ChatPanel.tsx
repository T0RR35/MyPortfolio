import { useEffect, useId, useRef, useState } from "react";
import { SiGooglegemini } from "react-icons/si";
import GeminiChat from "./GeminiChat";
import "./ChatPanel.css";

const STORAGE_KEY = "chat-open";

// Abre sozinho só em telas largas (onde cabe ao lado do conteúdo)
function getInitialOpen(): boolean {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved !== null) return saved === "true";
    } catch {
        /* localStorage bloqueado */
    }
    return window.innerWidth >= 1440;
}

/**
 * Casca do painel lateral: lembra se está aberto, mostra o botão de abrir
 * quando minimizado e esconde o chat (sem desmontar) ao minimizar.
 */
export default function ChatPanel() {
    const panelId = useId();
    const [open, setOpen] = useState(getInitialOpen);
    const panelRef = useRef<HTMLDivElement>(null);
    const launcherRef = useRef<HTMLButtonElement>(null);
    const firstRender = useRef(true);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, String(open));
        } catch {
            /* ignora */
        }

        // acessibilidade: leva o foco para onde o usuário clicou, sem mexer no carregamento
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (open) panelRef.current?.querySelector("textarea")?.focus();
        else launcherRef.current?.focus();
    }, [open]);

    return (
        <aside className={`chat ${open ? "chat--open" : "chat--minimized"}`} aria-label="Chat">
            {!open && (
                <button
                    ref={launcherRef}
                    type="button"
                    className="chat__launcher"
                    onClick={() => setOpen(true)}
                    aria-expanded={false}
                    aria-controls={panelId}
                    aria-label="Abrir chat"
                    title="Abrir chat"
                >
                    <SiGooglegemini size={20} aria-hidden="true" />
                </button>
            )}

            <div id={panelId} ref={panelRef} className="chat__panel" hidden={!open}>
                <GeminiChat onMinimize={() => setOpen(false)} />
            </div>
        </aside>
    );
}