import type { Metadata } from "next";
import { Funnel_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import ToastWrapper from "./toastWrapper";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const funnel = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-funnel",
});

export const metadata: Metadata = {
  title: "Berechiah Ohootu",
  description:
    "A passionate frontend developer who loves turning designs into user-friendly, sleek, responsive, and interactive digital experiences. Let’s build something amazing together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${funnel.variable} antialiased `}>
        <ToastWrapper>{children}</ToastWrapper>
      </body>
    </html>
  );
}
