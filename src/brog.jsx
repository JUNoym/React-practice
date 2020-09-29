import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorname = "OyamaJunya";
    return (
      <React.Fragment>
        <Article
          title={"REACTの使い方"}
          order={3}
          isPublished={true}
          author={authorname}
        />
        <Article
          title={"再利用方法"}
          order={3}
          isPublished={true}
          author={authorname}
        />
      </React.Fragment>
    );
  }
}

export default Blog;
