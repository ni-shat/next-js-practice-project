import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <nav className="mx-auto w-fit mt-8 border-b">
          <ul className="flex gap-8">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/menu'>Menu</Link></li>
            <li><Link href='/about'>About</Link></li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
