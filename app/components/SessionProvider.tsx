"use client";

import { SessionProvider as nextAuthSessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <nextAuthSessionProvider>
      {children}
      <Toaster position="top-right" />
    </nextAuthSessionProvider>
  );
}
