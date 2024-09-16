import { Article } from "./types";
import { notFound } from "next/navigation";

// モックのブログ記事全件取得
// CSR クライアントサイドレンダリング　※ブラウザ側でレンダリング
// SSR サーバーサイドレンダリング　※サーバ側でレンダリング
// SSG 静的サイトジェネレーション ※ビルド時にページを生成し、リクエスト時には静的ページを返却
// ISR ※SSR×SSG 特定時間が経過すると再度ビルドを実行させることが出来る

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts/`, {
    cache: "no-store", //SSR
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  // ローディングするための表示遅延時間設定
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = await res.json();
  return articles;
};

export const getDetailArticles = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 }, //ISR
  });

  if (res.status === 400) {
    // articles/not-found.tsxを呼び出している
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  // ローディングするための表示遅延時間設定
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await res.json();
  return articles;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDatetime = new Date().toISOString();
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, currentDatetime }),
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  // ローディングするための表示遅延時間設定
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticle = await res.json();
  return newArticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }

  // ローディングするための表示遅延時間設定
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const deleteArticle = await res.json();
  return deleteArticle;
};
