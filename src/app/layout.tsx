import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cunas que salavan vidas",
  description: "Informatización del flujo de trabajo de Cunas que salvan vidas es un proyecto de un equipo de desarrollo que ha tenido claro que quería trabajar para aportar soluciones a problemas reales y de alto impacto lo antes posible",
  keywords: "itfc, cunas",
  robots: "noindex, nofollow",
  authors: [
    {
      name: "Roberto Hernando",
      url: "https://github.com/rchernando",
    },
    {
      name: "Jaime Garitagoitia",
      url: "https://github.com/jaimeGarita",
    }
  ],
  referrer: "no-referrer",
  applicationName: "IFTC",
  themeColor: "#000000",
  creator: "Roberto Hernando & Jaime Garitagoitia",
  publisher: "Roberto Hernando & Jaime Garitagoitia",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
