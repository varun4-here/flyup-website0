import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-header",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const viewport = {
  themeColor: "#1E3A8A",
};

export const metadata = {
  title: "FlyUP Foundation — Empowering Campuses. Mobilizing Youth.",
  description:
    "FlyUP Foundation is a technology-driven non-profit empowering campuses and mobilizing youth across Uttar Pradesh through STEM labs, robotics, AI education, and community initiatives.",
  keywords: [
    "FlyUP Foundation",
    "STEM education",
    "robotics",
    "AI",
    "youth empowerment",
    "Uttar Pradesh",
    "non-profit",
  ],
  authors: [{ name: "FlyUP Foundation" }],
  icons: {
    icon: "/images/logo0.jpg",
    apple: "/images/logo0.jpg",
  },
  openGraph: {
    title: "FlyUP Foundation — Empowering Campuses. Mobilizing Youth.",
    description:
      "A technology-driven non-profit empowering youth across Uttar Pradesh.",
    type: "website",
    images: [{ url: "/images/logo0.jpg", width: 512, height: 512, alt: "FlyUP Foundation Logo" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
