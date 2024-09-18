import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// app/layout.tsx
export const metadata = {
  title: "Afni & Galang Wedding",
  description: "Join us in celebrating the wedding of Afni and Galang!",
  openGraph: {
    title: "Afni & Galang Wedding",
    description: "Join us in celebrating the wedding of Afni and Galang!",
    url: "https://weddingweb-beta.vercel.app/", // Ganti dengan URL kamu
    siteName: "Afni & Galang Wedding",
    images: [
      {
        url: "https://weddingweb-beta.vercel.app/images/couple-1.jpg", // Ganti dengan URL gambar
        width: 600,
        height: 600,
        alt: "Afni & Galang Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
