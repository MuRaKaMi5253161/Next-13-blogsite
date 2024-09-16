import React from "react";
import img from "../../../../public/next.svg";
import Image from "next/image";
import { getDetailArticles } from "@/blogAPI";
import DeleteButton from "@/app/components/DeleteButton";

const Article = async ({ params }: { params: { id: string } }) => {
  const detailArticle = await getDetailArticles(params.id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image src={img} alt="" width={1280} height={300} />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
