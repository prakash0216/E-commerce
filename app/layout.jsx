import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar } from "@/components/AppBar";
import { Providers } from "./lib/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="border-b-2 ">
            <AppBar />
          </div>
          {children}
        </body>
      </Providers>
    </html>
  );
}
