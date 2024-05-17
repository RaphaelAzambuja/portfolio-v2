import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raphael Azambuja Desenvolvedor",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        <body className={raleway.className}>{children}</body>
    </html>
  );
}
