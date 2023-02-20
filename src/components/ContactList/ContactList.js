import React from "react";
// import PropTypes from "prop-types";
import css from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { contactsInitialState, deleteContact } from "redux/contactsSlice";

// const ContactList = ( { contacts, onBtnClick } ) => {

const ContactList = () => {

  const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(contact.id));

  return <ul className={css.list}>
    {contactsInitialState.map( ({ id, name, number})  => (  
      
      <li key={id} className={css.listItem}>
        <p className={css.contactName}>{name} : </p>
        <p className={css.contactNumber}>{number}</p>
      
        <button type="button" 
          onClick={() => dispatch(deleteContact(id))} 
          className={css.deleteBtn}>
          Delete
        </button>
      </li>
      )
    )}
    </ul>
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf (
//     PropTypes.shape ({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired
//     })
//   ).isRequired,
//   onBtnClick: PropTypes.func.isRequired
// };

export default ContactList;
