// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "swiper/css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Energyplan",
  description: "Energyplan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
