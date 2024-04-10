import type { Metadata } from "next";
import { poppins } from "./ui/fonts";
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
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
