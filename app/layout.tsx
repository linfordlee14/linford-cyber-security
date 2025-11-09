import type { Metadata, ReactNode } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linfy Cyber Security - Ethical Hacking, Audits & Training",
  description: "Cybersecurity, ethically: practical audits, training & secure web builds for small businesses and NGOs. Educational labs, safe demos, and responsible security practices.",
  keywords: ["cybersecurity", "ethical hacking", "security audit", "phishing simulation", "awareness training", "penetration testing"],
  authors: [{ name: "Linford Musiyambodza" }],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
