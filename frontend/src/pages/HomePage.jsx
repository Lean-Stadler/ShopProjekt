import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section>
            <p className="eyebrow">DER SCHWEIZER CUBE SHOP</p>

            <h1>
                Life is a cube.
                <br />
                <span className="accent">Solve it.</span>
            </h1>

            <p>
                Schnelle Cubes, ehrliche Beratung und alles,
                was du für deine nächste Bestzeit brauchst.
            </p>

            <Link to="/shop" className="button">
                Cubes entdecken →
            </Link>
        </section>
    );
}