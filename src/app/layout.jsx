import RootLayoutClient from "./\bRootLayoutClient";
import "./globals.css";
import "swiper/css";

export const metadata = {
  title: "Energyplan",
  description: "Energyplan",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
