import { useSyncExternalStore } from "react";

// Observa a classe "dark" no <html>, que é o que o botao de tema alterna.
function subscribe(callback: () => void) {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    });
    return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");

export function useIsDark(): boolean {
    return useSyncExternalStore(subscribe, getSnapshot, () => true);
}