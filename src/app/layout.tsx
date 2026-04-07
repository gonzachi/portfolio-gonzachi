import type { Metadata } from "next";
import { Poppins, Lora } from "next/font/google";
import Script from "next/script";
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
    <html lang="es" className={`${poppins.variable} ${lora.variable}`}>
      <body>
        {children}
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
        {/* Hotjar Tracking Code for Portfolio 2026 */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6685057,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </body>
    </html>
  );
}
