// auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const {
  handlers: { GET, POST },
  auth,        // server helper: await auth()
  signIn,      // server action
  signOut,     // server action
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" }, // stores sessions in DB (uses Session model)
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: false,
    }),
    // For Credentials flow, you'd add a Credentials provider here.
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // after login go to /products (requirement)
      if (url === "/") return `${baseUrl}/products`;
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return baseUrl;
    },
  },
});
