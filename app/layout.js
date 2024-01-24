import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Body from "./components/Body";

const inter = Inter({ subsets: ["latin"] });
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Body
        className={`${inter.className} ${interTight.variable} text-off-black`}
      >
        {children}
      </Body>
    </html>
  );
}
