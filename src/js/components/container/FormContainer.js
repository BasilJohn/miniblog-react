import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../presentational/Header";
import Footer from "../presentational/Footer";
import Styles from "../container/container.css";
import AddUpdateArticle from "./AddUpdateArticle";
import ArticleList from "./ArticleList";
import renderIf from "../common/renderIf";
import {
    loadArticle,
    updateArticle,
    addArticle,
    setToDefault,
    setEditValues,
    deleteArticle
} from "../../store/actions/main";

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            isAddUpdate: false,
            articleList: [],
            isUpdate: false,
            index: null
        };
    }

    openAddNewArticle() {
        this.setState({ isAddUpdate: true });
        this.setState({ isUpdate: false });
    }

    opeEditArticle(index) {
        this.setState({ isAddUpdate: true });
        this.setState({ isUpdate: true });
        this.setState({ index: index });
        let list = [...this.props.articleList];
        this.props.setEditValues(list[index]);
    }

    postArticle() {
        this.setState({ isAddUpdate: false });
        const { titleText, articleText } = this.props;

        if (this.state.isUpdate) {
            let updateList = [...this.props.articleList];
            updateList[this.state.index] = { titleText, articleText };
            this.setState({ isAddUpdate: false });
            this.setState({ isUpdate: false });
            this.props.updateArticle(updateList);
        } else {
            this.props.addArticle({ titleText, articleText });
        }
        this.props.setToDefault();
    }

    backToPrevious() {
        this.setState({ isAddUpdate: false });
        this.setState({ isUpdate: false });
        this.props.setToDefault();
    }

    deleteArticle() {

        this.setState({ isAddUpdate: false });
        this.setState({ isUpdate: false });
        this.props.setToDefault(this.props.articleList.splice(this.state.index, 1));

    }

    render() {
        return (
            <form id="main-form" className={Styles.main}>
                <Header
                    postArticle={this.postArticle.bind(this)}
                    backToPrevious={this.backToPrevious.bind(this)}
                    isAddUpdate={this.state.isAddUpdate}
                    isUpdate={this.state.isUpdate}
                    text="Mini-blog"
                />
                <div className={Styles.content}>
                    <ArticleList
                        openEditArticle={this.opeEditArticle.bind(this)}
                        articleList={this.props.articleList}
                        isAddUpdate={this.state.isAddUpdate}
                    />
                    <AddUpdateArticle isAddUpdate={this.state.isAddUpdate} />
                </div>

                <Footer
                    isAddUpdate={this.state.isAddUpdate}
                    isUpdate={this.state.isUpdate}
                    deleteArticle={this.deleteArticle.bind(this)}
                    openNextpage={this.openAddNewArticle.bind(this)}
                />
            </form>
        );
    }
}
const mapStateToProps = ({ main }) => {
    const { articleList, isAdded, isUpdated, titleText, articleText } = main;
    return { articleList, isAdded, isUpdated, titleText, articleText };
};

export default connect(
    mapStateToProps,
    {
        loadArticle,
        updateArticle,
        addArticle,
        setToDefault,
        setEditValues,
        deleteArticle
    }
)(FormContainer);
