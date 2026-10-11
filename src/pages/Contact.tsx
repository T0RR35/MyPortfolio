import { useContact } from "@/data/contact";
import { useProfileLinks } from "@/data/profile";
import "./Contact.css";
import ContactForm from "@/components/ContactForm";

function displayValue(href: string): string {
    if (href.startsWith("mailto:")) return href.replace("mailto:", "");

    if (href.includes("wa.me/")) {
        const digits = href.split("wa.me/")[1].replace(/\D/g, "");
        const br = digits.match(/^55(\d{2})(\d{5})(\d{4})$/);
        return br ? `+55 (${br[1]}) ${br[2]}-${br[3]}` : `+${digits}`;
    }

    return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function Contact() {
    const { eyebrow, title, subtitle, form } = useContact();
    const links = useProfileLinks();

    return (
        <section className="contact" aria-labelledby="contact-title">
            <header className="contact__header">
                <p className="contact__eyebrow">{eyebrow}</p>
                <h1 id="contact-title" className="contact__title">
                    {title}
                </h1>
                <p className="contact__subtitle">{subtitle}</p>
            </header>

            <div className="contact__layout">
                <ContactForm form={form} />

                <ul className="contact__channels">
                    {links.map(({ label, href, icon: Icon }) => {
                        const external = href.startsWith("http");

                        return (
                            <li key={label}>
                                <a
                                    className="contact__channel"
                                    href={href}
                                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                >
                                    <span className="contact__channel-icon" aria-hidden="true">
                                        <Icon size={18} />
                                    </span>
                                    <span className="contact__channel-text">
                                        <span className="contact__channel-label">{label}</span>
                                        <span className="contact__channel-value">{displayValue(href)}</span>
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}