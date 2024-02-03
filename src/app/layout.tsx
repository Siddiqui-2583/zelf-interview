import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "../components/common/Navbar";
import "../styles/custom-tailwind.css";
import "../styles/globals.css";
import "../styles/index.css";
import { Providers } from "./Providers";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zelf. | Turn TikTok Into Revenue",
  description: "Turn TikTok Into Revenue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={outfit.className}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
