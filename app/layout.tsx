import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";

export const metadata: Metadata = {
  title: "Coveshade — Your Private Cove",
  description:
    "The Face Canopy. Luxury sun shade designed for the discerning beach-goer. UPF 50+ protection, instant setup, premium materials.",
  keywords: [
    "beach shade",
    "face canopy",
    "sun protection",
    "beach accessories",
    "UPF 50",
    "luxury beach",
  ],
  openGraph: {
    title: "Coveshade — Your Private Cove",
    description: "The Face Canopy. Luxury sun shade for the beach.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-dark font-sans antialiased grain">
        {children}
      </body>
    </html>
  );
}
