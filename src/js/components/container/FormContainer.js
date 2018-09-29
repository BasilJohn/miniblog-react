import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../presentational/Header";
import Footer from "../presentational/Footer";
import Styles from "../container/container.css";
import AddUpdateArticle from "./AddUpdateArticle";
import ArticleList from "./ArticleList";
import renderIf from "../common/renderIf";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      isAddUpdate: false
    };
  }

  openAddNewArticle() {
    this.setState({ isAddUpdate: true });
  }

  postArticle(){

    this.setState({ isAddUpdate: false });
  }

  render() {
    return (
      <form id="main-form" className={Styles.main}>
        <Header
          postArticle={this.postArticle.bind(this)}
          isAddUpdate={this.state.isAddUpdate}
          text="Mini-blog"
        />
        <div className="content">
          <ArticleList isAddUpdate={this.state.isAddUpdate} />
          <AddUpdateArticle isAddUpdate={this.state.isAddUpdate} />
        </div>
        {renderIf(
          !this.state.isAddUpdate,
          <Footer
            isAddUpdate={this.state.isAddUpdate}
            openNextpage={this.openAddNewArticle.bind(this)}
          />
        )}
      </form>
    );
  }
}
export default FormContainer;
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
