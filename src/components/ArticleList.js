import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const articleItem = posts.map((articleObj) => {
        return <Article key={articleObj.id} title={articleObj.title} date={articleObj.date} preview={articleObj.preview} />
    })
  return (
    <main>
        {articleItem}
    </main>
  );
}

export default ArticleList;