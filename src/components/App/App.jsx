//npm install redux
// npm install react-redux
//npm install @redux-devtools/extension
//npm install @reduxjs/toolkit

// npm install @reduxjs/toolkit react-redux
// npm i redux-persist

// next npx is not used because HW based on template:
// npx create-react-app my-app --template redux


import css from "./App.module.css";
import Container from "../Container";
import ContactForm from "components/ContactForm";
import  ContactList  from "../ContactList";
import Filter from "../Filter";

const App = () => {
  
  // const searchName = () => {
  //   const searchingName = filter.toLowerCase();

  //   const filteredContacts = contacts.filter( contact => (
  //     contact.name.toLowerCase().includes(searchingName))
  //   );

  //   return filteredContacts;
  // };


  return (  
      <Container>
        <div className={css.phoneBookContainer}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm 
          // onSubmit={onSubmitHandler}
          />
        </div>

        <h2 className={css.title}>Contacts</h2> 
{/* 
        <Filter 
        valueFilter={filter} 
        onChangeFilter={onHandleFilter}
        />  
          
        { contacts.length > 0 && 
        (<ContactList contacts={searchName()} onBtnClick={deleteContact}/>)}   */}

        <Filter/>
        <ContactList/>
      </Container>
  )
};

export default App;