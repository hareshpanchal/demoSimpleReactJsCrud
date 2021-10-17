import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Languages1 = () => {
     const [computerLanguages, setComputerLanguages] = useState([
        {id:1, name:"PHP"},
        {id:2, name:"NodeJs"},
        {id:3, name:"Python"},
        {id:4, name:"C++"}
     ]);

const [name, setName] = useState("");

// inputHandle method is for working with input field

const inputHandle = e => {
    setName(e.target.value);
};






     //const addLanguage = (e) => {
     const addLanguage = e => {
         e.preventDefault();
         //setComputerLanguages([...computerLanguages, {id:5, name:"Dart"}]);
         setComputerLanguages([...computerLanguages, {id:uuidv4(), name:name}]);
         setName(""); // This is will clear the input field previous inputted text
     };

     return(
         <React.Fragment>
         <table className="table" border="1">
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                 </tr>
             </thead>

             <tbody>
                 {computerLanguages.map(language => (
                     <tr key={language.id}>
                         <td>{language.id}</td>
                         <td>{language.name}</td>
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
             onChange={inputHandle}
             placeholder="Add Language..."
             />
         </div>
         <input 
         type="submit" 
         className="btn btn-primary" 
        // onClick={addLanguage} // Now no need of this 
         value="Add Language" 
         />
         </form>
         </React.Fragment>
     );
};

export default Languages1;