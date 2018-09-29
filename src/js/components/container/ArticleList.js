import React, { Component } from "react";
import Styles from "../container/container.css";

class ArticleList extends Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {

    const listItems = this.props.articleList.map((item,index) =>
      <div className={Styles.brief} key={index}>
        <b>{item.titleText}</b>
      </div>);

    return (
      <div
        className={[
          this.props.isAddUpdate
            ? Styles.content__displaynone
            : Styles.content__displayinline
        ]}
      >
        <div >
          {listItems}
        </div>
      </div>
    );
  }
}
export default ArticleList;
