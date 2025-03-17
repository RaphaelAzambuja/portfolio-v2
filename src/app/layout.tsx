import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Message from "@/components/message/Message";

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
        <body className={raleway.className}>
          {/* <Message /> */}
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  );
}
