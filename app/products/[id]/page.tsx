// app/products/[id]/page.tsx
import { notFound } from "next/navigation";

async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed");
  return res.json();
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-3">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="opacity-80">{product.description}</p>
      <p className="text-lg font-semibold">${Number(product.price).toFixed(2)}</p>
    </main>
  );
}
