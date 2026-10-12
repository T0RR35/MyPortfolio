import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/utils/languageSwitcher";
import "./PageNotFound.css";

const TEXT = {
    en: {
        title: "Page not found",
        message: "The page you're looking for doesn't exist or was moved.",
        button: "Back to home",
    },
    pt: {
        title: "Página não encontrada",
        message: "A página que você procura não existe ou foi movida.",
        button: "Voltar ao início",
    },
};

export default function PageNotFound() {
    const language = useLanguage();
    const t = TEXT[language as "en" | "pt"] ?? TEXT.en;

    return (
        <main className="not-found">
            <p className="not-found__code" aria-hidden="true">404</p>
            <h1 className="not-found__title">{t.title}</h1>
            <p className="not-found__message">{t.message}</p>

            <Link to="/" className="not-found__button">
                <ArrowLeft size={18} aria-hidden="true" />
                {t.button}
            </Link>
        </main>
    );
}