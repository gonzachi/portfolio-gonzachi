import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gonzalo Chiavassa | Product Designer",
  description: "Visita mi portfolio digital. Product Designer con más de 6 años de experiencia en startups, especializado en UX/UI Design.",
  keywords: ["Product Designer", "UX Designer", "UI Designer", "Portfolio", "Gonzalo Chiavassa"],
  authors: [{ name: "Gonzalo Chiavassa" }],
  openGraph: {
    title: "Gonzalo Chiavassa | Product Designer",
    description: "Product Designer con más de 6 años de experiencia en startups",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${lora.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
