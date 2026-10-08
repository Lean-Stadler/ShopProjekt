import { Link } from "react-router-dom";

export default function CartPage() {
    return (
        <section>
            <h1>Dein Warenkorb</h1>
            <p>Dein Warenkorb ist noch leer.</p>

            <Link to="/shop" className="button">
                Cubes entdecken →
            </Link>
        </section>
    );
}