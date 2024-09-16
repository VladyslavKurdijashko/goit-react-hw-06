
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ onDelete }) => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
