import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netic — AI Visibility Tracker",
  description: "The first AI visibility tool built for home service companies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
