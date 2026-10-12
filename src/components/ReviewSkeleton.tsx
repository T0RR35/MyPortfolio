import "./ReviewSkeleton.css";

/** Cartão "fantasma" com o mesmo formato do ReviewCard, mostrado enquanto carrega. */
export default function ReviewSkeleton() {
    return (
        <div className="review-skeleton" aria-hidden="true">
            <span className="review-skeleton__block review-skeleton__icon" />

            <div className="review-skeleton__lines">
                <span className="review-skeleton__block" />
                <span className="review-skeleton__block" />
                <span className="review-skeleton__block" />
                <span className="review-skeleton__block" />
            </div>

            <div className="review-skeleton__author">
                <span className="review-skeleton__block review-skeleton__avatar" />
                <div className="review-skeleton__info">
                    <span className="review-skeleton__block" />
                    <span className="review-skeleton__block" />
                    <span className="review-skeleton__block" />
                </div>
            </div>
        </div>
    );
}