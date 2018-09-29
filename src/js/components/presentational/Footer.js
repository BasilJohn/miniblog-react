import React from "react";
import PresentationalStyles from "../presentational/presentational.css";

const Footer = (props) => (

    <div className={["form-group"]}>
        <div className={[PresentationalStyles.footer]}>

            <img onClick={() => props.openNextpage()} className={PresentationalStyles.footer__image} src="../../../src/assets/plus.svg" />

        </div>
    </div>
);

export default Footer;
