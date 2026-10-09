import { useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import ReviewFormModal from "@/components/ReviewFormModal";
import { useReview, type ReviewEntry } from "@/data/reviews";
import { addQuote } from "@/services/reviewsService";
import "./Reviews.css";

export default function Reviews() {
    const { eyebrow, title, subtitle, btn_text, items } = useReview().data;
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

            <div className="reviews__grid">
                {[...submitted, ...items].map((review) => (
                    <ReviewCard key={`${review.author}-${review.organization}`} review={review} />
                ))}
            </div>

            <ReviewFormModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleSubmit}
            />
        </section>
    );
}