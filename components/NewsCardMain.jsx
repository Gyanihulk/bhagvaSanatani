import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { urlFor } from "../lib/client";

const NewsCardMain = ({ news ,index}) => {
   
  const date = news?.launchAt;
  return news?.heading1 ? (
    <div className="scroll-img-item">
      <div className="scroll-img"><Image className="scroll-img" src={urlFor(news?.headerImg)}/></div>

      <button className="img-btn">{news?.Categories?news.Categories[0].name:"Category"}</button>

      <div className="scroll-img-texts">
        <p className="scroll-img-title">
          {news?.heading1 ? news?.heading1 : ""}
        </p>
        <p className="scroll-img-text">{news?.para1 ? news?.para1 : " "}</p>
        <p className="scroll-img-date">
          {" "}
          {date ? date.toString().slice(0, 10) : " "}
        </p>
        <p className="scroll-img-date">
          {" "}
          {news?.location ? news.location : " "}
        </p>

        <Link href={`/news/${news?.slug?.current ? news.slug.current : ""}`}>
          <button className="scroll-btn">
            <a>Full article</a>
          </button>
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
};

export default NewsCardMain;
