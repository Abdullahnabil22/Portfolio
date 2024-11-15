import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";

const comic = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comic",
});

export const metadata: Metadata = {
  title: "Abdullah Nabil",
  description: "Abdullah Nabil Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${comic.variable}`}>
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
