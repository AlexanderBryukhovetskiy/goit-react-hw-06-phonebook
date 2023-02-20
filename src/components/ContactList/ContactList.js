import React from "react";
import css from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { contactsInitialState, deleteContact } from "redux/contactsSlice";
import { filterInitialState } from "redux/filterSlice";


const ContactList = () => {

  const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(contact.id));

  if (contactsInitialState.length > 0) {

    //  передати правильно значення фільтра зі стейта:
    const searchingName = filterInitialState.trim().toLowerCase();  

    const filteredContacts = contactsInitialState.filter( 
      contact => contact.name.toLowerCase().includes(searchingName));

    return <ul className={css.list}>
      {filteredContacts.map( ({ id, name, number})  => (  
        
        <li key={id} className={css.listItem}>
          <p className={css.contactName}>{name} : </p>
          <p className={css.contactNumber}>{number}</p>
        
          <button type="button" className={css.deleteBtn}

            onClick={() => dispatch(deleteContact(id))}      // NOT WORK !?

          >Delete
          </button>
        </li>
        )
      )}
      </ul>
  }
};

export default ContactList;
