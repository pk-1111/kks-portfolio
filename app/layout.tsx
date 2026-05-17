import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const geistSans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyaw Kaung San - Junior Full-Stack Developer",
  description: "My corner of the internet to share projects I've built and a bit about what drives me as a developer ",

  openGraph: {
    title: "Kyaw Kaung San — Junior Full-Stack Developer",
    description: "My corner of the internet to share projects I've built and a bit about what drives me as a developer.",
    url: "https://kks-portfolio.vercel.app/",
    siteName: "Kyaw Kaung San Portfolio",
    images: [
      {
        url: "https://kks-portfolio.vercel.app/gg-image.png", // public folder ထဲက ပုံ link
        width: 1200,
        height: 650,
      },
    ],
    locale: "en_US",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-sans">
        {/* Background က Layout အဆင့်မှာ ရှိနေရမယ် */}



        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
