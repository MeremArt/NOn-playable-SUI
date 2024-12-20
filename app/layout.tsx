import { Fredoka } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const fredoka = Fredoka({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Non-playable Suis",
  description: "A new era starts with legendary Wojack on Sui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fredoka.variable}`}>{children}</body>
    </html>
  );
}
