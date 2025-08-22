"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent SSR theme mismatch

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="font-bold text-xl">
        <Link href="/">ProductApp</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        {!session && (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
        {session && (
          <>
            <li>
              <Link href="/dashboard/add-product">Dashboard</Link>
            </li>
            <li>
              <button onClick={() => signOut()}>Logout</button>
            </li>
          </>
        )}
        <li>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-2 py-1 border rounded"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
