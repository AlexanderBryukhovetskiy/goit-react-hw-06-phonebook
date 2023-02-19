import { useState } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const ContactForm = ({onSubmit}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
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

    onSubmit({
      name, 
      number, 
      id: nanoid()}); 

    // onSubmit({name, number}); 
    
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ContactForm;