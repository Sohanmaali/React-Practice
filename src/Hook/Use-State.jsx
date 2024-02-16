import { useState } from "react";
let UseStateHook = () => {

     const [name, setName] = useState();
     const [email, setEmail] = useState();
     const [data, setData] = useState([]);

     const addData = () => {
          setData([...data, { name, email }]);
          setName("");
          setEmail("");
     }
     const removeItem = (index) => {
          let arr = data;
          arr.splice(index, 1);
          setData([...arr]);
     }

     return (
          <>
               <div>
                    <input value={name} onChange={(event) => setName(event.target.value)} type='text' placeholder='Name'></input>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} type='text' placeholder='Email'></input>
                    <button onClick={addData} >Add</button>
               </div>

               {
                    data.map((element, index) => {
                         return (
                              <div key={index}>
                                   <p>{element.name}</p>
                                   <p>{element.email}</p>
                                   <button onClick={() => removeItem(index)}>Remove</button>
                              </div>)
                    })
               }
          </>
     );
}
export default UseStateHook;