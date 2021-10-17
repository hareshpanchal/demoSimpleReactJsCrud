import React, {useContext} from 'react';
import {ContactData} from '../Context/ContactData';
import ContactDetails from './ContactDetails';

const Contacts = () => {
//const data = useContext(ContactData);
// console.log("This is data ", data);
// console.log("This is data.users ", data.users);

const { users1 } = useContext(ContactData);
console.log("This is just users ",users1);
    // return(
    //     <>
    // <h1>Hello</h1>
    
    // </>
    // );
    return users1.length ? <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {users1.map((user2) => (
                <tr key={user2.id}>
                    <ContactDetails user3={user2} />
                </tr>
            ))}
        </tbody>
    </table> : <div> No Data </div>;
};

export default Contacts;