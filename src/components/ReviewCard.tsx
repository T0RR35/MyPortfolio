import { Quote } from "lucide-react";
import type { ReviewEntry } from "@/data/reviews";
import "./ReviewCard.css";

interface ReviewCardProps {
    review: ReviewEntry;
}

// "Dr. Helena Costa" -> "HC" (ignora títulos como Dr., Dra., Prof.)
function getInitials(name: string): string {
    const words = name.split(/\s+/).filter((word) => word && !word.endsWith("."));
    if (words.length === 0) return "?";
    const first = words[0][0];
    const last = words.length > 1 ? words[words.length - 1][0] : "";
    return (first + last).toUpperCase();
}

export default function ReviewCard({ review }: ReviewCardProps) {
    const { author, role, relationship, organization, date, quote } = review;
    const meta = [relationship, organization, date].filter(Boolean).join(" · ");

    return (
        <figure className="review-card">
            <Quote size={28} aria-hidden="true" className="review-card__icon" />

            <blockquote className="review-card__quote">
                <p>“{quote}”</p>
            </blockquote>

            <figcaption className="review-card__author">
                <span className="review-card__avatar" aria-hidden="true">
                    {getInitials(author)}
                </span>

                <span className="review-card__info">
                    <span className="review-card__name">{author}</span>
                    <span className="review-card__role">{role}</span>
                    <span className="review-card__meta" title={meta}>
                        {meta}
                    </span>
                </span>
            </figcaption>
        </figure>
    );
}