
import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search contacts..."
    value={value}
    onChange={onChange}
    className={styles.input}
  />
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
