import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "RAYOLF",
  description: "Luxury Online Shopping Experience",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        {children}</body>
    </html>
  );
}
