import React, { Component } from "react";
import Styles from "../container/container.css";
import Input from '../presentational/Input';
import TextArea from '../presentational/TextArea';

class AddUpdate extends Component {
    constructor() {
        super();
        this.state = {
            titleText: "",
            description: ""
        };
    }

    handleChange(event) {

        this.setState({ [event.target.id]: event.target.value });
    }

    handleTextAreaChange(event) {

        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const { titleText, description } = this.state;
        return (
            <div
                className={[
                    this.props.isAddUpdate
                        ? Styles.content__displayinline
                        : Styles.content__displaynone]
                }
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
                    value={description}
                    handleChange={this.handleTextAreaChange.bind(this)}
                />
            </div>
        );
    }
}
export default AddUpdate;
