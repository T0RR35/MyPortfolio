const LOCALES = { en: "en-US", pt: "pt-BR" };

//PRA FORMATAR A DATA QUE VEM DO SUPABASE DESCONFIGURADA
export function formatDate(value, language) {
    const raw = (value ?? "").trim();
    if (!raw) return "";

    if (/^\d{4}$/.test(raw)) return raw;

    const normalized = raw.includes("T")
        ? raw.replace(/(\.\d{3})\d+/, "$1").replace(/([+-]\d{2})$/, "$1:00")
        : raw;

    const date = new Date(normalized);
    if (Number.isNaN(date.getTime())) return raw;

    const locale = LOCALES[language] ?? LOCALES.en;
    return new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric" }).format(date);
}