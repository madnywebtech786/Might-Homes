import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mightyhomes.ca"),
  title: {
    default: "Mighty Homes | Custom Home Builder in Alberta",
    template: "%s | Mighty Homes",
  },
  description:
    "Mighty Homes is Alberta's trusted custom home builder. We craft premium, energy-efficient homes in Calgary, Airdrie, Chestermere, Cochrane, Okotoks & Strathmore. 15+ years. 500+ homes built. Get a free consultation today.",
  keywords: [
    "custom home builder Alberta",
    "new homes Calgary",
    "home builder Airdrie",
    "new homes Chestermere",
    "home builder Cochrane",
    "new homes Okotoks",
    "custom homes Strathmore",
    "luxury home builder Alberta",
    "pre-construction homes Alberta",
    "townhomes Alberta",
    "Mighty Homes",
  ],
  authors: [{ name: "Mighty Homes", url: "https://mightyhomes.ca" }],
  creator: "Mighty Homes",
  publisher: "Mighty Homes",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://mightyhomes.ca",
    siteName: "Mighty Homes",
    title: "Mighty Homes | Custom Home Builder in Alberta",
    description:
      "Build the home you've always dreamed of with Mighty Homes — Alberta's trusted custom home builder for over 15 years. 500+ homes built across Calgary, Airdrie, Chestermere & beyond.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mighty Homes — Custom Home Builder in Alberta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mighty Homes | Custom Home Builder in Alberta",
    description:
      "Build your dream home with Alberta's trusted custom builder. 500+ homes. 15+ years. Serving Calgary, Airdrie, Chestermere, Cochrane & more.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mightyhomes.ca",
  },
  icons: {
    icon: "/images/logoRounded.png",
    shortcut: "/images/logoRounded.png",
    apple: "/images/logoRounded.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
