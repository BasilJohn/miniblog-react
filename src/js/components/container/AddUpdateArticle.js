import React, { Component } from "react";
import Styles from "../container/container.css";
import Input from "../presentational/Input";
import TextArea from "../presentational/TextArea";
import { connect } from "react-redux";
import { setTitle, setArticleText } from "../../store/actions/main";
import renderIf from "../common/renderIf";

let commentsList = [];
class AddUpdate extends Component {
    constructor() {
        super();
        this.state = {
            titleText: "",
            description: ""
        };
    }

    handleChange(event) {
        this.props.setTitle(event.target.value);
    }

    handleTextAreaChange(event) {
        this.props.setArticleText(event.target.value);
    }

    render() {
        const { titleText, articleText } = this.props;
        if (this.props.isUpdate) {
            commentsList = this.props.comments.map((item, index) => (
                <div className={Styles.comments__section} key={index}>
                    {item.body}
                </div>
            ));
        }

        return (
            <div
                className={[
                    this.props.isAddUpdate
                        ? Styles.content__displayinline
                        : Styles.content__displaynone
                ]}
            >
                <Input
                    text="Title"
                    label="title_text"
                    type="text"
                    id="titleText"
                    value={titleText}
                    handleChange={this.handleChange.bind(this)}
                />
                <TextArea
                    text="Description"
                    label="description"
                    type="text"
                    id="description"
                    value={articleText}
                    handleChange={this.handleTextAreaChange.bind(this)}
                />
                {renderIf(
                    this.props.isUpdate,
                    <div
                        className={[
                            this.props.isUpdate
                                ? Styles.comments
                                : Styles.content__displaynone
                        ]}
                    >  <b>{"Comments"}</b>
                        {commentsList}
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = ({ main }) => {
    const { titleText, articleText } = main;
    return { titleText, articleText };
};

export default connect(
    mapStateToProps,
    {
        setArticleText,
        setTitle
    }
)(AddUpdate);
