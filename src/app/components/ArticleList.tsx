import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../public/next.svg";

function ArticleList() {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-40">
          <Image src={img} alt="" width={1280} height={300} />
        </Link>
        <div className="bg-white">
          <a href="#" className="text-blue-700 pb-4 font-bold">
            Technplogy
          </a>
          <a href="#" className="text-slate-900 pb-4 text-3xl font-bold">
            Next.js学習
          </a>
          <p>By Murakami on 2024/06/07</p>
        </div>
      </article>
    </div>
  );
}

export default ArticleList;
