import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

import FormContainer from "../js/components/container/FormContainer";

ReactDOM.render(
    <Provider store={store}>
        <FormContainer />
    </Provider>,
    document.getElementById("main")
);