import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Settling in Catan",
  description: "Generate Maps for the Game Settlers of Catan",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon-png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Settling in Catan",
    description: "Generate Maps for the Game Settlers of Catan",
    images: [
      "https://davidknoerzer.github.io/settling-in-catan/_next/static/media/sheep.ea7c13f0.svg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
