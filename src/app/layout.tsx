import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afni & Galang Wedding",
  description: "Saturday, April 19th 2025",
  twitter: {
    card: "summary_large_image",
    site: "@galangalrizky",
    title: "Afni & Galang Wedding",
    description: "Saturday, April 19th 2025",
    image: "https://weddingweb-beta.vercel.app/images/couple-1.jpg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
