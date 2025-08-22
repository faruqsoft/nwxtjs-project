import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link href={`/products/${product.id}`}>Details</Link>
    </div>
  );
}
