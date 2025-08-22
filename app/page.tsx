// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <div className="font-bold">Brand</div>
        <div className="space-x-4">
          <Link href="/products" className="underline">Products</Link>
          <Link href="/login" className="underline">Login</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl p-4 py-16">
        <h1 className="text-4xl font-bold">Shop smarter, faster.</h1>
        <p className="mt-2 opacity-80">Discover curated tech with transparent pricing.</p>
        <div className="mt-6">
          <Link href="/products" className="rounded-lg bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
            Explore Products
          </Link>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="mx-auto grid max-w-6xl gap-4 p-4 sm:grid-cols-3">
        {["Quality", "Value", "Support"].map((t) => (
          <div key={t} className="rounded-2xl border p-6">
            <h3 className="font-semibold">{t}</h3>
            <p className="text-sm opacity-80">What makes us different.</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t py-8 text-center opacity-70">
        © {new Date().getFullYear()} Brand. All rights reserved.
      </footer>
    </main>
  );
}
