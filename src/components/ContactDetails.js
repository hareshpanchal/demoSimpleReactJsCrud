import React, {useContext} from 'react';
import { ContactData } from '../Context/ContactData';

const ContactDetails = ({user3}) => {
    // const {removeContact} = useContext(ContactData); // Now removeContact has taken place of dispatch
    const {dispatch} = useContext(ContactData); 
    return(
        <>
        <td>{user3.name}</td>
        <td>{user3.email}</td>
        <td>{user3.phone}</td>
        <td>
            {/* <button type="button" className="btn btn-danger" onClick={ () => removeContact(user3.id)}> */}
            {/* <button type="button" className="btn btn-danger" onClick={ () => dispatch(user3.id)}> */}
            <button type="button" className="btn btn-danger" onClick={ () => dispatch({type: 'REMOVE_CONTACT', id: user3.id})}>
                Remove
            </button>
        </td>
        </>
    );
};

export default ContactDetails;