import React from "react";
import PropTypes from "prop-types";
const TextArea = ({ label, text, type, id, value, handleChange }) => (
    <div className={["form-group"]}>
        <label htmlFor={label}>{text}</label>
        <textarea
            type={type}
            className="form-control"
            id={id}
            value={value}
            onChange={handleChange}
            required
            rows={10}
        />
    </div>
);
TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};
export default TextArea;