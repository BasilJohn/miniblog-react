import React, { Component } from "react";
import Styles from "../container/container.css";

class ArticleList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        className={[
          this.props.isAddUpdate
            ? Styles.content__displaynone
            : Styles.content__displayinline
        ]}
      >
        {"ArticleList"}
      </div>
    );
  }
}
export default ArticleList;
