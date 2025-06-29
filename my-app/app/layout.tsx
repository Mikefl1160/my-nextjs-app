import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanTest - Testing Kits for Every Need",
  description: "Professional, trustworthy products to ensure you're ready.",
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
