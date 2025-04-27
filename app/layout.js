import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RohiT - Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
          <Analytics />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
