// app/layout.js
import "./globals.css";
import "./fonts.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Ayurvedic Third-Party Manufacturer | Herbal Cosmetic Manufacture",
  description:
    "Third-party manufacturing services for Ayurvedic medicines and herbal cosmetics. Private label, contract manufacturing, and herbal product manufacturing in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="NVrg6zfUQOisvv-P2CL1HxoSv5awrS9FSsBwcWwPk4s"
        />

        {/* ✅ GTM Head Script */}
        {/* <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KFLF6HDG');
          `}
        </Script> */}

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-180220730-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-180220730-1');
          `}
        </Script>
      </head>
      <body>
        {/* ✅ GTM Body Noscript */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFLF6HDG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}

        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Whatsapp Button */}
        <WhatsAppButton />

        {/* ✅ Tawk.to Script */}
        {/* <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69b7db89c4b5991c3637ea58/1jjr3357a';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script> */}

        <Script
          id="messenger-widget-b"
          src="https://cdn.botpenguin.com/website-bot.js"
          strategy="afterInteractive"
        >
          {`69de1ebccee2f8a252a2ac26,69d63c998639fcb260aea92b`}
        </Script>

      </body>
    </html>
  );
}
