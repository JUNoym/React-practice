import React from "react";

const Article = (props) => {
  let publishState = "";
  if (props.isPublished) {
    publishState = "open";
  } else {
    publishState = "close";
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p>順番は{props.order}</p>
      <p>著者名：{props.author}</p>
      <p>{publishState}</p>

      {/* なぜコンポーネントを使うのか */}
      {/* 再利用するため
      分割統治するため
      変更に強くするため */}
    </div>
  );
};

export default Article;
