import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const schnyder = localFont({
  src: [
    { path: "../fonts/SchnyderS-Demi.otf", weight: "600", style: "normal" },
    { path: "../fonts/SchnyderS-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-schnyder",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forbes Advisor — Your payroll match",
  description: "Your payroll match is ready. See the partner that fits your answers, and how the top three compare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="payroll" className={`${jakarta.variable} ${schnyder.variable}`}>
      <body>{children}</body>
    </html>
  );
}
