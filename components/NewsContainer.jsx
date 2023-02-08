import React, { useEffect } from "react";
import NewsCardMain from "./NewsCardMain";

const NewsContainer = ({ newsArticles }) => {
//  console.log(newsArticles)
  return (
    <div className="scroll-imgs-container">
      <h1>Latest News</h1>
      {newsArticles.map((newsArticle,index) => (<>
        <NewsCardMain key={index} news={newsArticle} index={index}/>
      </>
    
        
      ))}
      <NewsCardMain />
    </div>
  );
};

export default NewsContainer;
