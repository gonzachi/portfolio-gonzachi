import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto-mono",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL('https://gonzachi.com'),
  title: "Gonzalo Chiavassa | Product Designer",
  description: "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership y visión de producto end-to-end. Cuento con más de 8 años de experiencia laboral. Actualmente trabajo en Mango, construyendo productos corporativos orientados a mejorar la productividad de los equipos internos.",
  keywords: ["Product Designer", "UX Designer", "UI Designer", "Portfolio", "Gonzalo Chiavassa"],
  authors: [{ name: "Gonzalo Chiavassa" }],
  openGraph: {
    title: "Gonzalo Chiavassa | Product Designer",
    description: "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership y visión de producto end-to-end. Cuento con más de 8 años de experiencia laboral. Actualmente trabajo en Mango, construyendo productos corporativos orientados a mejorar la productividad de los equipos internos.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gonzalo Chiavassa — Portfolio & CV · Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Chiavassa | Product Designer",
    description: "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership y visión de producto end-to-end. Cuento con más de 8 años de experiencia laboral. Actualmente trabajo en Mango, construyendo productos corporativos orientados a mejorar la productividad de los equipos internos.",
    images: ["/opengraph-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // When the on-screen keyboard opens on mobile, resize the layout viewport
  // instead of overlaying it — otherwise a fixed-height, pinned-bottom
  // layout (like the chat composer on "/") can end up hidden behind the
  // keyboard or jump around as it opens/closes.
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.setAttribute('data-theme','light');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {/* Google Consent Mode v2 — must run BEFORE gtag.js loads. No
            consent banner anymore, so this default (denied) is permanent:
            analytics_storage never flips to granted, and Hotjar (which
            only loaded on "accept") never loads. */}
        <Script id="consent-mode-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
            });
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CX90Q6CS5W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CX90Q6CS5W');
          `}
        </Script>

        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
