import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../presentational/Header";
class FormContainer extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <form id="main-form">
                <Header text="Mini-blog" />
            </form>
        );
    }
}
export default FormContainer;
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;