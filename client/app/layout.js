import "./globals.css";
import { Inter, Julius_Sans_One } from "next/font/google";
import Header from "./layout/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600"]
});

const julius = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "XVITAL | Premium Nutrition Protocol",
  description: "Science backed personalized nutrition protocol"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${julius.className} text-slate-800 bg-[#FAFAFA] antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}