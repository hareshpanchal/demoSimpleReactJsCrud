import React, { useContext } from 'react';
import InputHook from '../Hooks/InputHooks';
import { ContactData } from '../Context/ContactData';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {

    // const { addContact } = useContext(ContactData); this has taken place of dispatch
    const { dispatch } = useContext(ContactData);

    const [name, setName, resetName] = InputHook("");
    const [email, setEmail, resetEmail] = InputHook("");
    const [phone, setPhone, resetPhone] = InputHook("");

    const addNewContact = e => {
        e.preventDefault();
        // addContact( { id:uuidv4(), name: name, email: email, phone: phone } ); 
        // dispatch( { id:uuidv4(), name: name, email: email, phone: phone } );
        // this newContact taken in contactReducer.js
        dispatch( { type: 'ADD_CONTACT', newContact: {id:uuidv4(), name: name, email: email, phone: phone }} ); // inside curly braces called action in Redux
        resetName('');
        resetEmail('');
        resetPhone('');
    }






    return(
        <>
        <form onSubmit={addNewContact}>
            <div className="form-group">
                <h3> Add Contact </h3>
            </div>

            <div className="form-group">
                <input type="text" name="name" className="form-control" 
                placeholder="Enter name" value={name} onChange={setName} />            
            </div>

            <div className="form-group">
                <input type="email" name="email" className="form-control" 
                placeholder="Enter email" value={email} onChange={setEmail} />            
            </div>

            <div className="form-group">
                <input type="text" name="phone" className="form-control" 
                placeholder="Enter phone" value={phone} onChange={setPhone} />            
            </div>

            <div className="form-group">
               <input type="submit" className="btn btn-info btn-block" />          
            </div>
        </form>
        <br />
        <br />
</>
        
    );

};

export default ContactForm;