import { useSyncExternalStore } from "react";

const SUPPORTED = ["en", "pt"];
const listeners = new Set();

function detectLanguage() {
    return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export let language = detectLanguage();
document.documentElement.lang = language === "pt" ? "pt-BR" : "en";

export function setLanguage(next) {
    if (!SUPPORTED.includes(next) || next === language) return;

    language = next;
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    listeners.forEach((listener) => listener());
}

export function switchLanguage() {
    setLanguage(language === "en" ? "pt" : "en");
}

function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

// Chame no topo de qualquer componente que precise redesenhar quando o idioma mudar
export function useLanguage() {
    return useSyncExternalStore(subscribe, () => language);
}