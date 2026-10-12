import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type KeyboardEvent } from "react";
import { FiChevronsRight, FiRefreshCw, FiSend, FiSquare } from "react-icons/fi";
import { SiGooglegemini } from "react-icons/si";
import GEMINI_CONFIG from "@/config/geminiConfig";
import { askGemini } from "@/services/geminiService";
import MarkdownText from "./MarkdownText";
import "./GeminiChat.css";

/**
 * Chat "Pergunte sobre mim" com o Gemini.
 * As respostas aparecem em streaming (palavra por palavra).
 *
 * <GeminiChat onMinimize={() => ...} />
 */

const { ASSISTANT_NAME, WELCOME, SUGGESTIONS, MAX_MESSAGE } = GEMINI_CONFIG;

type Role = "user" | "model";

interface Message {
    id: number;
    role: Role;
    text: string;
    streaming?: boolean;
    error?: boolean;
    stopped?: boolean;
    hint?: string | null;
}

// erros que o geminiService lança (name/code/retryAfter são acrescentados lá)
interface GeminiError extends Error {
    code?: string;
    retryAfter?: number;
}

const ERROR_HINTS: Record<string, string> = {
    missing_key: "Crie o .env.local com a GEMINI_API_KEY (veja o README) e reinicie o npm run dev.",
    invalid_key: "Gere uma nova chave em aistudio.google.com/apikey.",
    model_not_found: "Confira o nome do modelo no GEMINI_MODEL.",
    no_api: "As funções da pasta api/ só rodam no npm run dev ou na Vercel.",
};

let nextId = 1;
const newMessage = (role: Role, text: string, extra: Partial<Message> = {}): Message => ({
    id: nextId++,
    role,
    text,
    ...extra,
});

interface GeminiChatProps {
    onMinimize: () => void;
}

export default function GeminiChat({ onMinimize }: GeminiChatProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const listRef = useRef<HTMLDivElement>(null);
    const abortRef = useRef<AbortController | null>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Rola para a última mensagem sempre que algo muda
    useEffect(() => {
        const list = listRef.current;
        if (list) list.scrollTop = list.scrollHeight;
    }, [messages]);

    // Cancela a resposta em andamento se o componente sair da tela
    // (minimizar NÃO desmonta: o painel só é escondido, então a resposta continua)
    useEffect(() => () => abortRef.current?.abort(), []);

    const send = async (text: string) => {
        const question = text.trim();
        if (!question || loading) return;

        // Histórico que vai junto: só mensagens completas, sem erros
        const history = messages
            .filter((m) => !m.error && !m.streaming)
            .map((m) => ({ role: m.role, text: m.text }));

        const answer = newMessage("model", "", { streaming: true });
        setMessages((list) => [...list, newMessage("user", question), answer]);
        setInput("");
        setLoading(true);

        const controller = new AbortController();
        abortRef.current = controller;
        const update = (patch: Partial<Message>) =>
            setMessages((list) => list.map((m) => (m.id === answer.id ? { ...m, ...patch } : m)));

        try {
            await askGemini(question, {
                history,
                signal: controller.signal,
                onChunk: (partial: string) => update({ text: partial }),
            });
            update({ streaming: false });
        } catch (caught) {
            const error = caught as GeminiError;
            if (error?.name === "AbortError") {
                update({ streaming: false, stopped: true });
            } else {
                update({
                    streaming: false,
                    error: true,
                    text: error.message,
                    hint:
                        (error.code && ERROR_HINTS[error.code]) ??
                        (error.retryAfter ? `Tente de novo em ${error.retryAfter} s.` : null),
                });
            }
        } finally {
            setLoading(false);
            abortRef.current = null;
            inputRef.current?.focus();
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        send(input);
    };

    // Enter envia; Shift+Enter quebra a linha
    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            send(input);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value.slice(0, MAX_MESSAGE));
    };

    const reset = () => {
        abortRef.current?.abort();
        setMessages([]);
        setInput("");
    };

    return (
        <section className="gemini-chat" aria-label={`Chat com ${ASSISTANT_NAME}`}>
            {/* ---------- Cabeçalho ---------- */}
            <header className="gemini-chat-header">
                <div className="gemini-chat-title">
                    <span className="gemini-chat-avatar" aria-hidden="true">
                        <SiGooglegemini />
                    </span>
                    <div>
                        <strong>Pergunte para {ASSISTANT_NAME}</strong>
                        <span className="gemini-chat-status">
                            <span className={loading ? "dot typing" : "dot"} aria-hidden="true" />
                            <span className="gemini-chat-status-text">
                                {loading ? "digitando..." : "respostas geradas pelo Gemini"}
                            </span>
                        </span>
                    </div>
                </div>

                <div className="gemini-chat-actions">
                    <button
                        type="button"
                        className="gemini-chat-icon-btn"
                        onClick={reset}
                        disabled={messages.length === 0}
                        title="Nova conversa"
                    >
                        <FiRefreshCw aria-hidden="true" />
                        <span className="sr-only">Nova conversa</span>
                    </button>

                    <button
                        type="button"
                        className="gemini-chat-icon-btn"
                        onClick={onMinimize}
                        title="Minimizar chat"
                    >
                        <FiChevronsRight aria-hidden="true" />
                        <span className="sr-only">Minimizar chat</span>
                    </button>
                </div>
            </header>

            {/* ---------- Mensagens ---------- */}
            <div className="gemini-chat-messages" ref={listRef} aria-live="polite">
                <div className="gemini-msg model">
                    <div className="gemini-bubble">
                        <p>{WELCOME}</p>
                    </div>
                </div>

                {messages.map((m) => (
                    <div key={m.id} className={`gemini-msg ${m.role}${m.error ? " error" : ""}`}>
                        <div className="gemini-bubble">
                            {m.role === "model" && !m.error ? (
                                m.text ? (
                                    <MarkdownText text={m.text} />
                                ) : (
                                    <span className="gemini-typing" aria-label="digitando">
                                        <span />
                                        <span />
                                        <span />
                                    </span>
                                )
                            ) : (
                                <p>{m.text}</p>
                            )}
                            {m.hint && <small>{m.hint}</small>}
                            {m.stopped && <small>Resposta interrompida.</small>}
                        </div>
                    </div>
                ))}

                {/* Perguntas prontas enquanto a conversa não começou */}
                {messages.length === 0 && (
                    <div className="gemini-suggestions">
                        {SUGGESTIONS.map((suggestion: string) => (
                            <button key={suggestion} type="button" onClick={() => send(suggestion)}>
                                {suggestion}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ---------- Caixa de texto ---------- */}
            <form className="gemini-chat-form" onSubmit={handleSubmit}>
                <textarea
                    ref={inputRef}
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Escreva sua pergunta..."
                    rows={1}
                    aria-label="Sua pergunta"
                />

                {loading ? (
                    <button
                        type="button"
                        className="gemini-stop"
                        onClick={() => abortRef.current?.abort()}
                        title="Parar"
                    >
                        <FiSquare aria-hidden="true" />
                        <span className="sr-only">Parar</span>
                    </button>
                ) : (
                    <button type="submit" disabled={!input.trim()} title="Enviar">
                        <FiSend aria-hidden="true" />
                        <span className="sr-only">Enviar</span>
                    </button>
                )}
            </form>

            <p className="gemini-chat-disclaimer">
                A IA pode errar. As respostas se baseiam no perfil do Rafael.
            </p>
        </section>
    );
}