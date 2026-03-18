import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daiana Lopez | UX/UI Designer — Buenos Aires",
  description:
    "Portfolio de Daiana Lopez, UX/UI Designer con experiencia en procesos end-to-end: research, sistemas de diseño, Figma y desarrollo frontend con React y Next.js. Buenos Aires, Argentina. Open to work.",
  keywords: [
    "UX/UI Designer",
    "Product Designer",
    "Diseñadora UX",
    "Figma",
    "Buenos Aires",
    "Portfolio",
    "Design System",
    "Atomic Design",
    "React",
    "Next.js",
    "User Research",
    "Prototyping",
  ],
  authors: [{ name: "Daiana Lopez" }],
  openGraph: {
    title: "Daiana Lopez | UX/UI Designer — Buenos Aires",
    description:
      "Diseñadora UX/UI con experiencia en research, sistemas de diseño y prototipado. También desarrollo en React y Next.js.",
    type: "website",
    locale: "es_AR",
  },
  icons: {
    icon: "/avatars/happy-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ` }
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
