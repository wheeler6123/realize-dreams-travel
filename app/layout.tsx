import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Realize Dreams Travel Agency",
  description: "We make all your travel dreams come true!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
