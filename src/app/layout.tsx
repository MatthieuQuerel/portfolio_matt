import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FaroInitializer from "@/components/FaroInitializer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Marius | Senior Fullstack Developer",
  description: "Portfolio de Marius, développeur Fullstack Senior avec 12 ans d'expérience (NodeJS, React, Python, Docker).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <FaroInitializer />
        {children}
      </body>
    </html>
  );
}
