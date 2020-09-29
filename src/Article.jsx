import React from "react";

const Article = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <label htmlFor="check">公開状態</label>
      <input
        type="checkbox"
        check={props.isPublished}
        id="check"
        onClick={() => props.toggle()}
      />
    </div>
  );
};

export default Article;
