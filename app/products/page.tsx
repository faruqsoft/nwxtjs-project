// app/products/page.tsx
import Link from "next/link";

async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <h1 className="text-2xl font-bold">Products</h1>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p: any) => (
          <li key={p.id} className="rounded-xl border p-4">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm opacity-80 line-clamp-2">{p.description}</p>
            <p className="mt-2 font-medium">${Number(p.price).toFixed(2)}</p>
            <Link className="mt-3 inline-block underline" href={`/products/${p.id}`}>
              Details
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
