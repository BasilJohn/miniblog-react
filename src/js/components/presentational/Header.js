import React from "react";
import PropTypes from "prop-types";
import PresentationalStyles from '../presentational/presentational.css';

const Header = ({ text, type, id, value }) => (
    <div className="form-group">
        <div className={PresentationalStyles.header}>
            <h6>
                <b>{text}</b>
            </h6>
        </div>
    </div>
);
Header.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string
};
export default Header;
