import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputHook from "./inputHook";

const Languages = () => {
     const [computerLanguages, setComputerLanguages] = useState([
        {id:1, name:"PHP", email: "php@gmail.com"},
        {id:2, name:"NodeJs", email: "nodejs@gmail.com"},
        {id:3, name:"Python", email: "python@gmail.com"},
        {id:4, name:"C++", email: "c++@gmail.com"}
     ]);

//const [name, setName] = useState("");

const [name, setName, clearName] = InputHook("");
const [email, setEmail, clearEmail] = InputHook("");
const [count, setCount] = useState(0);



     const addLanguage = e => {
         e.preventDefault();
         setComputerLanguages([...computerLanguages, {id:uuidv4(), name:name, email:email}]);
         clearName(); 
         clearEmail(); 
     };

     useEffect(() => {
         console.log("Use Effect Method Run!");
     }, [count]);

     return(
         <React.Fragment>
             <h1> {count} </h1>
         <table className="table" border="1">
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Email</th>
                 </tr>
             </thead>

             <tbody>
                 {computerLanguages.map(language => (
                     <tr key={language.id}>
                         <td>{language.id}</td>
                         <td>{language.name}</td>
                         <td>{language.email}</td>
                     </tr>
                 ))}
             </tbody>
         </table>
         <form onSubmit={addLanguage}>
         <div className="form-group">
             <input
             type="text"
             className="from-control"
             value={name}
            // onChange={inputHandle}
             onChange={setName}
             placeholder="Add Language..."
             />
         </div>

         <div className="form-group">
             <input
             type="email"
             className="from-control"
             value={email}
            // onChange={inputHandle}
             onChange={setEmail}
             placeholder="Add Email..."
             />
         </div>

         <input 
         type="submit" 
         className="btn btn-primary"  
         value="Add Language" 
         />
         </form>
         <div className="form-group">
             <input type="submit" value="Count" className="btn btn-info" onClick={() => setCount(count + 1)} />
         </div>
         </React.Fragment>
     );
};

export default Languages;