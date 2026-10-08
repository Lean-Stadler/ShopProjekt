import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="site-header">
            <Link to="/" className="logo">
                RUBIKS SHOP
            </Link>

            <nav aria-label="Hauptnavigation">
                <NavLink to="/" end>Startseite</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/fortbildung">Fortbildung</NavLink>
                <NavLink to="/kontakt">Kontakt</NavLink>
                <NavLink to="/warenkorb">Warenkorb</NavLink>
            </nav>
        </header>
    );
}