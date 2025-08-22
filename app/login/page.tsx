// app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="grid place-items-center py-24">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-semibold">Login</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="rounded-lg border px-4 py-2"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}
