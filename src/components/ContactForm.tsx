import { useId, useRef, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useProfileLinks } from "@/data/profile";
import type { ContactData } from "@/types/ContactData";
import "./ContactForm.css"

interface ContactFormProps {
    form: ContactData["form"];
}

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export default function ContactForm({ form }: ContactFormProps) {
    const id = useId();
    const formRef = useRef<HTMLFormElement>(null);
    const links = useProfileLinks();
    const [status, setStatus] = useState<Status>("idle");

    // e-mail de contato para mostrar se o envio falhar
    const to = links.find((link) => link.href.startsWith("mailto:"))?.href.replace("mailto:", "");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formRef.current || status === "sending") return;


        setStatus("sending");
        try {
            // os `name` dos campos (name, email, subject, message) são as
            // variáveis do template no painel do EmailJS: {{name}}, {{email}}...
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            });
            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS:", error);
            setStatus("error");
        }
    };

    return (
        <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
                <div className="contact__field">
                    <label htmlFor={`${id}-name`}>{form.name.label}</label>
                    <input
                        id={`${id}-name`}
                        name="name"
                        type="text"
                        placeholder={form.name.placeholder}
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="contact__field">
                    <label htmlFor={`${id}-email`}>{form.email.label}</label>
                    <input
                        id={`${id}-email`}
                        name="email"
                        type="email"
                        placeholder={form.email.placeholder}
                        autoComplete="email"
                        required
                    />
                </div>
            </div>

            <div className="contact__field">
                <label htmlFor={`${id}-subject`}>{form.subject.label}</label>
                <input
                    id={`${id}-subject`}
                    name="subject"
                    type="text"
                    placeholder={form.subject.placeholder}
                    required
                />
            </div>

            <div className="contact__field">
                <label htmlFor={`${id}-message`}>{form.message.label}</label>
                <textarea
                    id={`${id}-message`}
                    name="message"
                    rows={6}
                    placeholder={form.message.placeholder}
                    required
                />
            </div>

            <div className="contact__actions">
                <button type="submit" className="contact__submit" disabled={status === "sending"}>
                    <Send size={16} aria-hidden="true" />
                    {status === "sending" ? form.sending : form.submit}
                </button>
            </div>

            {status === "success" && (
                <p className="contact__status" role="status">
                    {form.success}
                </p>
            )}

            {status === "error" && (
                <p className="contact__status contact__status--error" role="alert">
                    {form.error} <a href={`mailto:${to}`}>{to}</a>
                </p>
            )}
        </form>
    );
}