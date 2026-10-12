import { useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import ReviewSkeleton from "@/components/ReviewSkeleton";
import ReviewFormModal from "@/components/ReviewFormModal";
import type { ReviewEntry } from "@/types/ReviewData";
import { useReview } from "@/data/reviews";
import { useLanguage } from "@/utils/languageSwitcher";
import { addQuote } from "@/services/reviewsService";
import "./Reviews.css";

const SKELETON_COUNT = 4;

const TEXT = {
    en: {
        loading: "Loading reviews...",
        error: "Could not load the reviews. Please try again later.",
        empty: "No reviews yet. Be the first to leave one!",
    },
    pt: {
        loading: "Carregando avaliações...",
        error: "Não foi possível carregar as avaliações. Tente novamente mais tarde.",
        empty: "Ainda não há avaliações. Seja a primeira pessoa a deixar uma!",
    },
};

export default function Reviews() {
    const { data, loading, error } = useReview();
    const { eyebrow, title, subtitle, btn_text, items } = data;
    const language = useLanguage();
    const t = TEXT[language as "en" | "pt"] ?? TEXT.en;

    const [modalOpen, setModalOpen] = useState(false);
    const [submitted, setSubmitted] = useState<ReviewEntry[]>([]);

    const handleSubmit = async (review: ReviewEntry) => {
        try {
            await addQuote(review);

            setSubmitted((prev) => [review, ...prev]);
            setModalOpen(false);
        } catch (error) {
            console.error("Erro ao salvar avaliação:", error);
        }
    };

    const reviews = [...submitted, ...items];
    const showSkeleton = loading && reviews.length === 0;

    return (
        <section className="reviews" aria-labelledby="reviews-title">
            <header className="reviews__header">
                <p className="reviews__eyebrow">{eyebrow}</p>
                <h1 id="reviews-title" className="reviews__title">
                    {title}
                </h1>
                <p className="reviews__subtitle">{subtitle}</p>

                <button
                    type="button"
                    className="reviews__cta"
                    onClick={() => setModalOpen(true)}
                    aria-haspopup="dialog"
                >
                    {btn_text}
                </button>
            </header>

            {/* Carregando: cartões "fantasma" no lugar dos depoimentos */}
            {showSkeleton && (
                <>
                    <p className="reviews__sr-only" role="status">
                        {t.loading}
                    </p>
                    <div className="reviews__grid" aria-busy="true">
                        {Array.from({ length: SKELETON_COUNT }, (_, index) => (
                            <ReviewSkeleton key={index} />
                        ))}
                    </div>
                </>
            )}

            {/* Falhou e não há nada para mostrar */}
            {!loading && error && reviews.length === 0 && (
                <p className="reviews__state reviews__state--error" role="alert">
                    {t.error}
                </p>
            )}

            {/* Terminou de carregar, sem erro, mas a lista está vazia */}
            {!loading && !error && reviews.length === 0 && (
                <p className="reviews__state">{t.empty}</p>
            )}

            {reviews.length > 0 && (
                <div className="reviews__grid">
                    {reviews.map((review) => (
                        <ReviewCard key={`${review.author}-${review.organization}`} review={review} />
                    ))}
                </div>
            )}

            <ReviewFormModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleSubmit}
            />
        </section>
    );
}