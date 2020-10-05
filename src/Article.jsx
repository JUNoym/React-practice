import React, { useState } from "react";
import Likebutton from "./Likebutton";

// ファンクショナルコンポーネントはステイトを持つ事ができないがuseState()を使えば
// ファンクショナルコンポーネントにステイトを持たせる事ができる

// フックとは、クラスの昨日をファンクショナルコンポーネントでも使えるようにするもので
// 100%後方互換なので小さく導入できるというメリットがある
// 手順としては
// useState関数をインポートして　const [isPublished, togglePublised] = useState(false);
// で宣言する

const Article = (props) => {
  const [isPublished, togglePublised] = useState(false);

  return (
    <div>
      <h1>{props.title}</h1>
      <label htmlFor="check">公開状態</label>
      <input
        type="checkbox"
        check={isPublished}
        id="check"
        onClick={() => togglePublised(!isPublished)}
      />
      <Likebutton />
    </div>
  );
};

export default Article;
