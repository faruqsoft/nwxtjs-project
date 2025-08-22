// app/layout.tsx
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { ThemeProvider } from "next-themes";

export const metadata = { title: "Product App", description: "Next.js 15 + NextAuth + Prisma" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
