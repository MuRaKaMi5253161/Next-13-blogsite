import { Article } from "./types";

// モックのブログ記事全件取得
// CSR クライアントサイドレンダリング　※ブラウザ側でレンダリング
// SSR サーバーサイドレンダリング　※サーバ側でレンダリング
// SSG 静的サイトジェネレーション ※ビルド時にページを生成し、リクエスト時には静的ページを返却
// ISR ※SSR×SSG 特定時間が経過すると再度ビルドを実行させることが出来る

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); //SSR

  const articles = await res.json();
  return articles;
};
