import { Link } from "react-router-dom";

const products = [
    { id: 1, name: "RS3 M Speedcube" },
    { id: 2, name: "Pro Magnetic 3×3" },
];

export default function ShopPage() {
    return (
        <section>
            <p className="eyebrow">UNSERE PRODUKTE</p>
            <h1>Finde deinen Cube.</h1>

            <div className="product-grid">
                {products.map((product) => (
                    <article className="product-card" key={product.id}>
                        <h2>{product.name}</h2>

                        <Link to={`/shop/${product.id}`} className="button">
                            Produkt ansehen →
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}