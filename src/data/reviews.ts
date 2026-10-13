import { useEffect, useState } from "react";
import { useLanguage } from "@/utils/languageSwitcher";
import { fetchQuotes } from "@/services/reviewsService";
import type { ReviewData, ReviewEntry } from "@/types/ReviewData";

type Language = "en" | "pt";

// textos fixos da pg
const headers: Record<Language, Omit<ReviewData, "items">> = {
    en: {
        eyebrow: "Testimonials",
        title: "Reviews & Recommendations",
        subtitle:
            "What people I've studied and worked with have to say about me. You can leave one too!",
            btn_text: "Leave a review"
    },
    pt: {
        eyebrow: "Depoimentos",
        title: "Avaliações e Recomendações",
        subtitle:
            "O que as pessoas com quem estudei e trabalhei têm a dizer sobre mim. Você também pode deixar o seu!",
        btn_text: "Deixe uma avaliação",
    },
};

// evita buscar de novo a cada vez que a pg eh aberta
const cache = new Map<Language, ReviewEntry[]>();

interface UseReviewResult {
    data: ReviewData;
    loading: boolean;
    error: boolean;
}

export function useReview(): UseReviewResult {
    const language = useLanguage() as Language;

    const [items, setItems] = useState<ReviewEntry[]>(() => cache.get(language) ?? []);
    const [loading, setLoading] = useState(() => !cache.has(language));
    const [error, setError] = useState(false);

    useEffect(() => {
        const cached = cache.get(language);
        if (cached) {
            setItems(cached);
            setLoading(false);
            setError(false);
            return;
        }

        let cancelled = false;
        setLoading(true);
        setError(false);

        fetchQuotes() //depois da pra colocar language como parametro pra traduzir
            .then((result) => {
                if (cancelled) return;
                cache.set(language, result);
                setItems(result);
            })
            .catch(() => {
                if (!cancelled) setError(true);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [language]);

    return {
        data: { ...(headers[language] ?? headers.en), items },
        loading,
        error,
    };
}