import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowEffect from "@/components/GlowEffect";
import { AuthProvider } from "@/lib/auth";

export const metadata: Metadata = {
  title: "CYSEC - Cybersecurity Community",
  description: "Join the modern cybersecurity community — secure, connect, learn.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-black text-white antialiased">
        <AuthProvider>
          <div className="min-h-screen bg-black relative">
            <GlowEffect />
            <Navbar />
            <main className="pt-20 relative z-10">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
