import { useEffect, useRef, useState, type FormEvent } from "react";
import type { ReviewEntry } from "@/types/ReviewData";
import { useLanguage } from "@/utils/languageSwitcher";
import "./ReviewFormModal.css";

interface ReviewFormModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (review: ReviewEntry) => void;
}

const TEXT = {
    en: {
        title: "Leave your review",
        close: "Close",
        author: { label: "Name", placeholder: "Your name" },
        role: { label: "Role", placeholder: "E.g., Tech Lead, student" },
        organization: { label: "Organization where we met", placeholder: "E.g., PUC Minas" },
        relationship: { label: "How do you know me?", placeholder: "E.g., We worked together" },
        quote: { label: "Review", placeholder: "Tell me what it was like to work with me…" },
        cancel: "Cancel",
        submit: "Submit review",
    },
    pt: {
        title: "Deixe sua avaliação",
        close: "Fechar",
        author: { label: "Nome", placeholder: "Seu nome" },
        role: { label: "Cargo", placeholder: "Ex.: Tech Lead, estudante" },
        organization: { label: "Organização que me conheceu", placeholder: "Ex.: PUC Minas." },
        relationship: { label: "Relação comigo", placeholder: "Ex.: Trabalhamos juntos" },
        quote: { label: "Avaliação", placeholder: "Conte como foi trabalhar comigo…" },
        cancel: "Cancelar",
        submit: "Enviar avaliação",
    },
};

const today = () => new Date().toISOString().slice(0, 10);

const emptyForm = (): ReviewEntry => ({
    author: "",
    role: "",
    relationship: "",
    organization: "",
    date: today(),
    quote: "",
});

export default function ReviewFormModal({ open, onClose, onSubmit }: ReviewFormModalProps) {
    const language = useLanguage();
    const t = TEXT[language as "en" | "pt"] ?? TEXT.en;

    const dialogRef = useRef<HTMLDialogElement>(null);
    const [form, setForm] = useState<ReviewEntry>(emptyForm);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    const update = (field: keyof ReviewEntry) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...form,
            author: form.author.trim(),
            role: form.role.trim(),
            relationship: form.relationship.trim(),
            organization: form.organization.trim(),
            quote: form.quote.trim(),
        });
        setForm(emptyForm());
        onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            className="review-modal"
            aria-labelledby="review-modal-title"
            onClose={onClose}
        >
            <form className="review-modal__form" onSubmit={handleSubmit}>
                <header className="review-modal__header">
                    <h2 id="review-modal-title" className="review-modal__title">
                        {t.title}
                    </h2>
                    <button
                        type="button"
                        className="review-modal__close"
                        onClick={onClose}
                        aria-label={t.close}
                    >
                        ×
                    </button>
                </header>

                <div className="review-modal__row">
                    <label className="review-modal__field">
                        <span>{t.author.label}</span>
                        <input
                            type="text"
                            value={form.author}
                            onChange={update("author")}
                            placeholder={t.author.placeholder}
                            required
                            autoComplete="name"
                        />
                    </label>

                    <label className="review-modal__field">
                        <span>{t.role.label}</span>
                        <input
                            type="text"
                            value={form.role}
                            onChange={update("role")}
                            placeholder={t.role.placeholder}
                            required
                            autoComplete="organization-title"
                        />
                    </label>
                </div>

                <div className="review-modal__row">
                    <label className="review-modal__field">
                        <span>{t.organization.label}</span>
                        <input
                            type="text"
                            value={form.organization}
                            onChange={update("organization")}
                            placeholder={t.organization.placeholder}
                            required
                            autoComplete="organization"
                        />
                    </label>

                    <label className="review-modal__field">
                        <span>{t.relationship.label}</span>
                        <input
                            type="text"
                            value={form.relationship}
                            onChange={update("relationship")}
                            placeholder={t.relationship.placeholder}
                            required
                        />
                    </label>
                </div>

                <label className="review-modal__field">
                    <span>{t.quote.label}</span>
                    <textarea
                        value={form.quote}
                        onChange={update("quote")}
                        placeholder={t.quote.placeholder}
                        rows={5}
                        required
                    />
                </label>

                <footer className="review-modal__actions">
                    <button type="button" className="review-modal__btn" onClick={onClose}>
                        {t.cancel}
                    </button>
                    <button type="submit" className="review-modal__btn review-modal__btn--primary">
                        {t.submit}
                    </button>
                </footer>
            </form>
        </dialog>
    );
}