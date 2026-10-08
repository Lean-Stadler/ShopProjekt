import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section>
            <p className="eyebrow">FEHLER 404</p>
            <h1>Hier fehlt ein Teil.</h1>
            <p>Diese Seite wurde nicht gefunden.</p>

            <Link to="/" className="button">
                Zur Startseite →
            </Link>
        </section>
    );
}