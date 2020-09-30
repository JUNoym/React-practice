import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0,
    };
  }
  //ライフサイクルを使ってイベントリスナーを設定し
  // countUp()メソッドを呼び出すが無限ループが起きないようにthis.countUpの形で渡したあげる必要がある
  //ライフサイクルはそれぞれの段階で必要な処理を記述するもの
  //ライフサイクルを使う理由としては関数の外に影響を与える関数を記述するため　例えばDOMの変更であったり　API通信　SetState()などを適切な場所に記述するため

  componentDidMount() {
    document.getElementById("counter").addEventListener("click", this.countUp);
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({ count: 0 });
    }
  }

  componentWillUnmount() {
    document
      .getElementById("counter")
      .removeEventListener("click", this.countUp);
  }

  //いいねのボタンを押したらカウント数が一増えるメソッド
  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

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
          count={this.state.count}
        />
      </>
    );
  }
}

export default Blog;
