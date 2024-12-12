import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "TIP Lab",
  description: "Translational Sports Injury Prevention Lab",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
