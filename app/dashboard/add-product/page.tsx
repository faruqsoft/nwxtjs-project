// app/dashboard/add-product/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AddProductForm from "./AddProductForm";

export default async function AddProductPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <main className="mx-auto max-w-xl p-6 space-y-6">
      <h1 className="text-2xl font-bold">Add Product</h1>
      <AddProductForm />
    </main>
  );
}
