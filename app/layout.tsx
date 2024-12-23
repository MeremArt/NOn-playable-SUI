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
  title: "NPSUIS",
  description:
    "NPC's are bridging from Sol to Sui and becoming NPSUIS. Degen's unite. This is no pump and dump, this is the next greatest meme coin on the market",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693154/web3_edjekd.png",
        width: 1200,
        height: 630,
        alt: "NPSUIS Logo",
      },
    ],
  },
  twitter: {
    title: "Chimera",
    description:
      "NPC's are bridging from Sol to Sui and becoming NPSUIS. Degen's unite. This is no pump and dump, this is the next greatest meme coin on the market",
    images: [
      {
        url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693154/web3_edjekd.png",
        alt: "NPSUIS Logo",
      },
    ],
    creator: "",
  },
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
