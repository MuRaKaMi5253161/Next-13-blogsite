import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "nextjs13 blog",
  description: "nextjs demo application",
};

// layout.tsxは各ページで共通で使用するコンポーネントを実装できる
// Headerとfooterは共通で利用するのでここで実装する
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <header>
          <Header />
        </header>

        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
