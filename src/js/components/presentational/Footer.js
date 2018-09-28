import React from "react";
import PresentationalStyles from "../presentational/presentational.css";

const Footer = (props) => (
    
    <div className={["form-group"]}>
        <div className={[PresentationalStyles.footer]}>
            <button type="button" onClick={() => props.openNextpage()}>
                <img className={PresentationalStyles.footer__image} src="../../../src/assets/plus.svg" />
            </button>
        </div>
    </div>
);

export default Footer;
