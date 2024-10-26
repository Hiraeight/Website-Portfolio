// layout.tsx
import type { Metadata } from "next";
import { Michroma } from "next/font/google"; // Import Michroma from Google Fonts
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

// Define the Michroma font
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"], // Specify any subsets you need, default is latin
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${michroma.className} antialiased`} // Apply Michroma font variable
      >
        {children}
      </body>
    </html>
  );
}
