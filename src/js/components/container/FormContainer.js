import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../presentational/Header";
import Footer from "../presentational/Footer";
import Styles from "../container/container.css";
import AddUpdateArticle from "./AddUpdateArticle";
import ArticleList from "./ArticleList";


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

    render() {
        return (
            <form id="main-form" className={Styles.main}>
                <Header text="Mini-blog" />
                <div className="content" >
                    <ArticleList isAddUpdate={this.state.isAddUpdate} />
                    <AddUpdateArticle isAddUpdate={this.state.isAddUpdate} />
                </div>
                <Footer openNextpage={this.openAddNewArticle.bind(this)} />
            </form>
        );
    }
}
export default FormContainer;
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
