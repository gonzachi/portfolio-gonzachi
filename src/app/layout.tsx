import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import Script from "next/script";
import { CookieBanner } from "@/components/CookieBanner";
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
  description: "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership. Me gusta resolver problemas end-to-end, y en estos tiempos que corren, la IA me está abriendo muchas puertas.",
  keywords: ["Product Designer", "UX Designer", "UI Designer", "Portfolio", "Gonzalo Chiavassa"],
  authors: [{ name: "Gonzalo Chiavassa" }],
  openGraph: {
    title: "Gonzalo Chiavassa | Product Designer",
    description: "Soy Gonzalo Chiavassa, Product Designer con mindset de ownership. Me gusta resolver problemas end-to-end, y en estos tiempos que corren, la IA me está abriendo muchas puertas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${lora.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var t=s==='light'||s==='dark'?s:'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body>
        {/* Google Consent Mode v2 — must run BEFORE gtag.js loads */}
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

        {children}

        {/* Cookie consent banner — also loads Hotjar when accepted */}
        <CookieBanner />
      </body>
    </html>
  );
}
