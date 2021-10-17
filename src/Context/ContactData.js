import React, { useState, createContext, useReducer, useEffect } from 'react';
import { ContactReducer } from '../Reducers/ContactReducer';

export const ContactData = createContext();

const ContactDataProvider = props => {

    // the below is taken in disptach one 
    // const [contacts, setContacts] = useState([
    //     {id:1, name: 'Lizanne', email: 'lizanne@gmail.com', phone: '8050505050'},
    //     {id:1, name: 'Pooja', email: 'pooja@gmail.com', phone: '8050505051'},
    //     {id:1, name: 'Rihen', email: 'rihen@gmail.com', phone: '8050505052'}
    // ]);



    // copied from above array of object
    // const [contacts, dispatch] = useReducer(ContactReducer, [
    //     {id:1, name: 'Lizanne', email: 'lizanne@gmail.com', phone: '8050505050'},
    //     {id:1, name: 'Pooja', email: 'pooja@gmail.com', phone: '8050505051'},
    //     {id:1, name: 'Rihen', email: 'rihen@gmail.com', phone: '8050505052'}
    // ]);

    // copied from above for storing data in local storage and import useEffect hook as above
    const [contacts, dispatch] = useReducer(ContactReducer, [], () => {
        const localData = localStorage.getItem('contacts');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect( () => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

// This has taken in ContactReducer.js as ADD_CONTACT
    // const addContact = contact => {
    //     // this ...contacts is in contactreducers as ...state
    //     setContacts([...contacts, contact ]);
    // }


    // This has taken in ContactReducer.js as REMOVE_CONTACT
    // const removeContact = id => {
    //     if(window.confirm("Are you really want to delete this contact?")) {
    //     const filtered = contacts.filter( contact => contact.id !== id );
    //     setContacts(filtered);
    //     }
    // };


    return (
        // <ContactData.Provider value={{...contacts}}>
        // <ContactData.Provider value={{ users1: contacts, addContact: addContact }}>
        // <ContactData.Provider value={{ users1: contacts, addContact, removeContact }}> This is has taken place of dispatch
        <ContactData.Provider value={{ users1: contacts, dispatch }}> 
            {props.children}
        </ContactData.Provider>
    );

};

export default ContactDataProvider;