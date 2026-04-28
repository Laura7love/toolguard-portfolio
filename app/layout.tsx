import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Importation de ton composant Navbar

export const metadata: Metadata = {
  title: "ToolGuard | EMINES",
  description: "Système intelligent de gestion d'outillage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-white">
        {/* La Navbar est placée ici pour être persistante sur tout le site */}
        <Navbar />
        
        {/* Le contenu de tes pages (projet, equipe, etc.) s'affiche ici */}
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}