import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClearTest - Smarter Testing",
  description: "Automated testing platform for modern applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
