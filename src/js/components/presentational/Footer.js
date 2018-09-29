import React from "react";
import PresentationalStyles from "../presentational/presentational.css";

const Footer = (props) => (

    <div className={["form-group"]}>
        <div onClick={() => props.deleteArticle()} className={[props.isUpdate ? PresentationalStyles.delete : PresentationalStyles.control__displaynone]}>
            <b>Delete this article</b>
        </div>
        <div className={[!props.isUpdate ? PresentationalStyles.footer : PresentationalStyles.control__displaynone]}>

            <div>
                <img onClick={() => props.openNextpage()} className={PresentationalStyles.footer__image} src="../../../src/assets/plus.svg" />
            </div>
        </div>
    </div>
);

export default Footer;
