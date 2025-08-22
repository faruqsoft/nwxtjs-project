import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Product App</h1>
        <p className="text-lg">Next.js 15 + NextAuth + Prisma + MongoDB</p>
      </section>

      <section className="highlights p-8">
        <h2 className="text-2xl font-semibold mb-4">Product Highlights</h2>
        {/* Featured products or highlights here */}
      </section>

      <Footer />
    </div>
  );
}
