import type { ReactNode } from "react";

/**
 * Markdown bem simples para as respostas do Gemini, sem innerHTML
 * (nada que venha da IA vira HTML de verdade, então não há risco de XSS):
 *   **negrito**, *itálico*, `código`, listas com "- " ou "1. " e parágrafos.
 */

type ListBlock = { type: "ul" | "ol"; items: string[] };
type ParagraphBlock = { type: "p"; text: string };
type Block = ListBlock | ParagraphBlock;

// **negrito**, *itálico* e `código` dentro de uma linha
function inline(text: string, keyPrefix: string | number): ReactNode[] {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`)/g);
    return parts.map((part, i) => {
        const key = `${keyPrefix}-${i}`;
        if (/^\*\*[^*]+\*\*$/.test(part)) return <strong key={key}>{part.slice(2, -2)}</strong>;
        if (/^`[^`]+`$/.test(part)) return <code key={key}>{part.slice(1, -1)}</code>;
        if (/^\*[^*]+\*$/.test(part)) return <em key={key}>{part.slice(1, -1)}</em>;
        return part;
    });
}

export default function MarkdownText({ text }: { text: string }) {
    const blocks: Block[] = [];
    let list: ListBlock | null = null;

    text.split("\n").forEach((raw) => {
        const line = raw.trimEnd();
        const bullet = /^\s*[-*•]\s+(.*)$/.exec(line);
        const numbered = /^\s*\d+[.)]\s+(.*)$/.exec(line);
        const match = bullet ?? numbered;

        if (match) {
            const type = bullet ? "ul" : "ol";
            if (!list || list.type !== type) {
                list = { type, items: [] };
                blocks.push(list);
            }
            list.items.push(match[1]);
            return;
        }

        list = null;
        if (line.trim()) blocks.push({ type: "p", text: line.replace(/^#+\s*/, "") });
    });

    return (
        <>
            {blocks.map((block, i) => {
                if (block.type === "p") return <p key={i}>{inline(block.text, i)}</p>;

                const List = block.type;
                return (
                    <List key={i}>
                        {block.items.map((item, j) => (
                            <li key={j}>{inline(item, `${i}-${j}`)}</li>
                        ))}
                    </List>
                );
            })}
        </>
    );
}