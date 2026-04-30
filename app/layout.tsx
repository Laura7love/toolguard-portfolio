import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ToolGuard | EMINES",
  description: "Solution industrielle - Optimisation et gestion d'outillage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-stone-950 text-white">
        {/* Navigation persistante */}
        <Navbar />
        
        {/* Contenu principal */}
        <main className="relative min-h-screen">
          {children}
        </main>

        {/* Footer anonymisé ToolGuard */}
        <Footer />
      </body>
    </html>
  );
}