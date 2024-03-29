import { Inter, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Body from "./components/Body";

const inter = Inter({ subsets: ["latin"] });
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});
const PP_Mori = localFont({
  variable: "--font-pp-mori",
  src: [
    {
      path: "../public/fonts/PPMori-Extralight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/PPMori-ExtralightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/PPMori-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPMori-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/PPMori-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/PPMori-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio/freelance web development website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Body
        className={`${inter.className} ${interTight.variable} ${PP_Mori.variable} text-off-black`}
      >
        {children}
      </Body>
    </html>
  );
}
