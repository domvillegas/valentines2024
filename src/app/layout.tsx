import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Red Like Raindrops In Fall",
  description: "A poem for my girlfriend.",
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
