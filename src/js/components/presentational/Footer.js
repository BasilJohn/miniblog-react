import React from "react";
import PresentationalStyles from "../presentational/presentational.css";

const Footer = () => (
    <div className="form-group">
        <div className={PresentationalStyles.footer}>
            <img className={PresentationalStyles.footer__image} src="../../../src/assets/plus.svg" />
        </div>
    </div>
);

export default Footer;
