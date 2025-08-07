import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HVAC Recruiting Expert | Get Qualified HVAC Techs Fast",
  description: "Stop losing business waiting on techs. Get qualified HVAC talent lined up and ready to interview. Professional HVAC recruiting services.",
  keywords: "HVAC recruiting, HVAC technicians, HVAC installers, HVAC talent, HVAC jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://hvacrecruiter.co" />

        {/* Open Graph / Twitter */}
        <meta property="og:site_name" content="HVACRecruiter.co" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hvacrecruiter.co/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Theme Colors */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />

        {/* Performance Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XKPBEB4DDL" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKPBEB4DDL');
          `}
        </Script>
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "HVAC Recruiter",
            url: "https://hvacrecruiter.co",
            logo: "https://hvacrecruiter.co/logo.svg",
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
