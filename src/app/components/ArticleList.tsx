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
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technplogy
          </Link>
          <Link href="#" className="text-slate-900 pb-4 text-3xl font-bold">
            Next.js学習
          </Link>
          <p className="text-sm pd-3 text-slate-900">
            By Murakami on 2024/06/07
          </p>
          <Link href="#" className="text-slate-900 pb-6">
            Im currently building a blog site using Next JS. The teaching
            materials are from Udemy and are very easy to understand. There are
            other materials I would like to study, but I will save them for
            future fun.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-40">
          <Image src={img} alt="" width={1280} height={300} />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technplogy
          </Link>
          <Link href="#" className="text-slate-900 pb-4 text-3xl font-bold">
            Next.js学習
          </Link>
          <p className="text-sm pd-3 text-slate-900">
            By Murakami on 2024/06/07
          </p>
          <Link href="#" className="text-slate-900 pb-6">
            Im currently building a blog site using Next JS. The teaching
            materials are from Udemy and are very easy to understand. There are
            other materials I would like to study, but I will save them for
            future fun.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
}

export default ArticleList;
