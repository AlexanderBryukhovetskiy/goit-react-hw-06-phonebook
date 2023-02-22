import React from "react";
import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";


const ContactList = () => {

  const contacts = useSelector( state => state.contacts);
  const filter = useSelector( state => state.filter);

  console.log("contacts in ContactList : ", contacts);
  console.log("filter in ContactList : ", filter);

  const dispatch = useDispatch();

  if (contacts.length > 0) {

    const searchingName = filter.trim().toLowerCase();  

    const filteredContacts = contacts.filter( 
      contact => contact.name.toLowerCase().includes(searchingName));

    return <ul className={css.list}>
      {filteredContacts.map( ({ id, name, number })  => (  
        
        <li key={id} className={css.listItem}>
          <p className={css.contactName}>{name} : </p>
          <p className={css.contactNumber}>{number}</p>
        
          <button type="button" className={css.deleteBtn}

            onClick={() => {
            console.log("id: ", id);
            console.log("dispatch(deleteContact(id)) :", dispatch(deleteContact(id)));

            dispatch(deleteContact(id))}  
              }    // NOT WORK !?

          >Delete
          </button>
        </li>
        )
      )}
      </ul>
  }
};

export default ContactList;
