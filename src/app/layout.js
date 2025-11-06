import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import clsx from "clsx";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Dimensione Musica Sanremo",
  description:
    "Celebrating the timeless charm of Sanremo with immersive performances, curated experiences, and unforgettable nights."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(playfair.variable, inter.variable, "font-sans antialiased bg-base-900 text-base-50")}>
      <body>{children}</body>
    </html>
  );
}
