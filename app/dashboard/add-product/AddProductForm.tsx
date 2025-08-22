"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const body = {
      name: fd.get("name"),
      description: fd.get("description"),
      price: Number(fd.get("price")),
    };

    try {
      setLoading(true);
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success("Product added!");
      router.push("/products");
      router.refresh();
    } catch (err: any) {
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" placeholder="Name" className="w-full rounded-lg border p-2" required />
      <textarea name="description" placeholder="Description" className="w-full rounded-lg border p-2" required />
      <input name="price" type="number" step="0.01" placeholder="Price" className="w-full rounded-lg border p-2" required />
      <button
        disabled={loading}
        className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-60 dark:bg-white dark:text-black"
      >
        {loading ? "Saving..." : "Add Product"}
      </button>
    </form>
  );
}
