import React from "react";
import PropTypes from "prop-types";
import Styles from "../presentational/presentational.css";

const Header = ({ text, isAddUpdate, postArticle }) => (
    <div className="form-group">
        <div className={Styles.header}>
            <div className={[isAddUpdate ? Styles.control__displayinline : Styles.control__displaynone]}>
                <img onClick={() => postArticle()}
                    className={Styles.cancel__image}
                    src="../../../src/assets/cancel.svg"
                />
            </div>
            <h6>
                <b>{text}</b>
            </h6>
            <div
                className={[isAddUpdate ? Styles.post : Styles.control__displaynone]}
            >
                <button
                    onClick={() => postArticle()}
                    className={Styles.post__button}
                    type="button"
                >
                    <p>{"Post"}</p>
                </button>
            </div>
        </div>
    </div>
);
Header.propTypes = {
    text: PropTypes.string,
    isAddUpdate: PropTypes.bool
};
export default Header;
