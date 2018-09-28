import React, { Component } from "react";
import Styles from "../container/container.css";
class AddUpdate extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div
                className={[
                    this.props.isAddUpdate
                        ? Styles.content__displayinline
                        : Styles.content__displaynone]
                }
            >
                {"AddUpdate"}
            </div>
        );
    }
}
export default AddUpdate;
