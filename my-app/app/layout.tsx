import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Synthetic Water Bags for Farms",
  description: "Durable irrigation solutions for agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
