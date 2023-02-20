import { useState } from "react";
import css from "./ContactForm.module.css";
// import { nanoid } from "nanoid";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addContact, contactsInitialState } from "redux/contactsSlice";


// const ContactForm = ({onSubmit}) => {

const ContactForm = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default: 
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    // onSubmit({ name, number, id: nanoid() }); 

    const form = event.target;
    const name = form.elements.name.value; 
    const number = form.elements.number.value;

    console.log("name : ", name);
    console.log("number : ", number);

    const isUnique = contactsInitialState.filter(  
      contactInStorage => 
      contactInStorage.name.toLowerCase() === name.toLowerCase());
    
    if (isUnique.length > 0) {
      return alert (`${name} is already in contacts.`);
    }
    else {
      dispatch(addContact( {
        name,
        number}
      ));
    }
    
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
        />
      </label>

      <label>Number
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        minLength={5}
        maxLength={13}
        required
        value={number}
        onChange={handleChange}
        />
      </label>

      <button className={css.submitBtn} type="submit">Add contact</button>
    </form>
  )
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

export default ContactForm;