import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../presentational/Header";
import Footer from "../presentational/Footer";

import Styles from "../container/container.css";

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <form id="main-form" className={Styles.main}>
                <Header text="Mini-blog" />
                <Footer />
            </form>
        );
    }
}
export default FormContainer;
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
