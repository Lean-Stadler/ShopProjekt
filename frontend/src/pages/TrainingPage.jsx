import { Link } from "react-router-dom";

export default function TrainingPage() {
    return (
        <section>
            <p className="eyebrow">LEHRERFORTBILDUNG</p>

            <h1>
                Kleine Würfel.
                <br />
                <span className="accent">Grosse Aha-Momente.</span>
            </h1>

            <p>
                Entdeckt als Team, wie der Zauberwürfel euren Unterricht
                bereichert — in einer halbtägigen Fortbildung direkt
                an eurer Schule in der Ostschweiz.
            </p>

            <h2>Das bringe ich mit</h2>

            <ul>
                <li>Alle Unterlagen</li>
                <li>Über 300 Würfel</li>
                <li>Mosaikvorlagen</li>
                <li>Mietmaterial zum Ausprobieren</li>
            </ul>

            <p><strong>CHF 600 pauschal für einen Nachmittag.</strong></p>

            <Link to="/kontakt" className="button">
                Fortbildung anfragen →
            </Link>
        </section>
    );
}