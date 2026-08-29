import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engineering Portfolio",
  description: "Engineering projects, design process, testing, and technical work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
