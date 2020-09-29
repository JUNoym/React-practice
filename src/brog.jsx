import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
    };
  }

  //公開状況を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  render() {
    return (
      <>
        <Article
          title={"REACTの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
        />
      </>
    );
  }
}

export default Blog;
