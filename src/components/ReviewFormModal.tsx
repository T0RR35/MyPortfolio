import { useEffect, useRef, useState, type FormEvent } from "react";
import type { ReviewEntry } from "@/data/reviews";
import "./ReviewFormModal.css";

interface ReviewFormModalProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (review: ReviewEntry) => void;
}

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
                        Deixe sua avaliação
                    </h2>
                    <button
                        type="button"
                        className="review-modal__close"
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        ×
                    </button>
                </header>

                <div className="review-modal__row">
                    <label className="review-modal__field">
                        <span>Nome</span>
                        <input
                            type="text"
                            value={form.author}
                            onChange={update("author")}
                            placeholder="Seu nome"
                            required
                            autoComplete="name"
                        />
                    </label>

                    <label className="review-modal__field">
                        <span>Cargo</span>
                        <input
                            type="text"
                            value={form.role}
                            onChange={update("role")}
                            placeholder="Ex.: Tech Lead"
                            required
                            autoComplete="organization-title"
                        />
                    </label>
                </div>

                <div className="review-modal__row">
                    <label className="review-modal__field">
                        <span>Empresa / organização</span>
                        <input
                            type="text"
                            value={form.organization}
                            onChange={update("organization")}
                            placeholder="Ex.: Acme Inc."
                            required
                            autoComplete="organization"
                        />
                    </label>

                    <label className="review-modal__field">
                        <span>Relação comigo</span>
                        <input
                            type="text"
                            value={form.relationship}
                            onChange={update("relationship")}
                            placeholder="Ex.: Trabalhamos juntos"
                            required
                        />
                    </label>
                </div>

                <label className="review-modal__field">
                    <span>Avaliação</span>
                    <textarea
                        value={form.quote}
                        onChange={update("quote")}
                        placeholder="Conte como foi trabalhar comigo…"
                        rows={5}
                        required
                    />
                </label>

                <footer className="review-modal__actions">
                    <button type="button" className="review-modal__btn" onClick={onClose}>
                        Cancelar
                    </button>
                    <button type="submit" className="review-modal__btn review-modal__btn--primary">
                        Enviar avaliação
                    </button>
                </footer>
            </form>
        </dialog>
    );
}