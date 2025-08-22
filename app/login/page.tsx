"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}
