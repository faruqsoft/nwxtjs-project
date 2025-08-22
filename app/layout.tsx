import "./globals.css";
import { ThemeProvider } from "next-themes";
import NextAuthSessionProvider from "./components/SessionProvider";

export const metadata = {
  title: "Product App",
  description: "Next.js 15 + NextAuth + Prisma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextAuthSessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
