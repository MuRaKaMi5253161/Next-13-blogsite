import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "./loading";

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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {/* ローディング時にLoadingコンポーネントを表示する */}
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
