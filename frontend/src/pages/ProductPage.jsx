import { Link, useParams } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "RS3 M Speedcube",
        description: "Ein magnetischer 3×3-Speedcube.",
    },
    {
        id: 2,
        name: "Pro Magnetic 3×3",
        description: "Ein Cube für deine nächste Bestzeit.",
    },
];

export default function ProductPage() {
    const { productId } = useParams();

    const product = products.find(
        (item) => String(item.id) === productId
    );

    if (!product) {
        return (
            <section>
                <h1>Produkt nicht gefunden</h1>
                <Link to="/shop">Zurück zum Shop</Link>
            </section>
        );
    }

    return (
        <section>
            <Link to="/shop">← Zurück zum Shop</Link>

            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Produktdaten sind aktuell Beispiele.</p>
        </section>
    );
}