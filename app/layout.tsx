import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  weight: ["400", "500", "600", "700"], // Including regular, medium, semibold, and bold weights
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});
const metadata = {
  title: "Non-playable Suis",
  description: "A new era starts with legendary Wojack on Sui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable}`}>{children}</body>
    </html>
  );
}
