// layout.tsx
import type { Metadata } from "next";
import Head from 'next/head';
import { Michroma } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Patrick Felicia",
  description: "Welcome to my Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/src/app/images/favivo.png" />
      </Head>
      <body
        className={`${michroma.className} antialiased`} // Apply Michroma font variable
      >
        {children}
      </body>
    </html>
  );
}
