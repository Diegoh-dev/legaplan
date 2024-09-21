import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from 'next/font/google'

export const metadata: Metadata = {
  title: "Legaplan",
  description: "Teste  dev júnior",
};

const inter = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500','600', '700'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
