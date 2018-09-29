import React from "react";
import PropTypes from "prop-types";
import Styles from "../presentational/presentational.css";

const Header = ({ text, isAddUpdate, postArticle, isUpdate,backToPrevious }) => (
  <div>
    <div className={Styles.header}>
      <div
        className={[
          isAddUpdate && !isUpdate
            ? Styles.control__displayinline
            : Styles.control__displaynone
        ]}
      >
        <img
          onClick={() => backToPrevious()}
          className={Styles.cancel__image}
          src="../../../src/assets/cancel.svg"
        />
      </div>
      <div
        className={[
          isAddUpdate && isUpdate
            ? Styles.control__displayinline
            : Styles.control__displaynone
        ]}
      >
        <img
          onClick={() =>backToPrevious()}
          className={Styles.cancel__image}
          src="../../../src/assets/previous.svg"
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
          <p>{isUpdate ? "Update" : "Post"}</p>
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
