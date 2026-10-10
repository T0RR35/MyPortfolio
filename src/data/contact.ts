import { useLanguage } from "@/utils/languageSwitcher";
import type { ContactData } from "@/types/ContactData";

const english_contact: ContactData = {
    eyebrow: "Get in touch",
    title: "Contact",
    subtitle:
        "Recruiters and teams welcome — use the form or reach out directly through any channel below.",
    form: {
        name: { label: "Name", placeholder: "Name" },
        email: { label: "Email", placeholder: "Email" },
        subject: { label: "Subject", placeholder: "Subject" },
        message: { label: "Message", placeholder: "Tell me about the role or opportunity..." },
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Could not send your message. Write directly to",
    },
};

const portuguese_contact: ContactData = {
    eyebrow: "Fale comigo",
    title: "Contato",
    subtitle:
        "Recrutadores e times são bem-vindos — use o formulário ou fale direto por qualquer um dos canais ao lado.",
    form: {
        name: { label: "Nome", placeholder: "Nome" },
        email: { label: "E-mail", placeholder: "E-mail" },
        subject: { label: "Assunto", placeholder: "Assunto" },
        message: { label: "Mensagem", placeholder: "Conte-me sobre a vaga ou oportunidade..." },
        submit: "Enviar mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada! Responderei em breve.",
        error: "Não foi possível enviar sua mensagem. Escreva direto para",
    },
};

const contact: Record<"en" | "pt", ContactData> = {
    en: english_contact,
    pt: portuguese_contact,
};

export function useContact(): ContactData {
    const language = useLanguage();
    return contact[language as "en" | "pt"] ?? english_contact;
}