import React, { useState } from "react";

const App = ()=>{
  const [todo, setTodo] = useState([])
  const [userInput, setUserInput] = useState("")
  const add_events =()=>{
    setTodo([...todo,userInput])
  }

  return <div>
    <h1>To Do List</h1>
    <input onChange={(event)=> setUserInput(event.target.value)}  type="text"></input>
    <button onClick={()=> add_events()} >Add Events</button>
    <ul>
      {
        todo.map((list,index)=>
        <li key={index}>{list}</li>)
      }
    </ul>

  </div>
}

export default App;

// Same Code but with Checkbox included

// import React, { useState } from "react";

// const App = () => {
//   const [todo, setTodo] = useState([]);
//   const [userInput, setUserInput] = useState("");

//   const addEvent = () => {
//     if (userInput.trim() !== "") {
//       const newTodoItem = {
//         task: userInput,
//         checked: false
//       };
//       setTodo([...todo, newTodoItem]);
//       setUserInput("");
//     }
//   };

//   const toggleCheckbox = (index) => {
//     setTodo((prevTodo) => {
//       const updatedTodo = [...prevTodo];
//       updatedTodo[index] = {
//         ...updatedTodo[index],
//         checked: !updatedTodo[index].checked
//       };
//       return updatedTodo;
//     });
//   };

//   return (
//     <div>
//       <h1>To Do List</h1>
//       <input
//         onChange={(event) => setUserInput(event.target.value)}
//         value={userInput}
//         type="text"
//       />
//       <button onClick={addEvent}>Add Event</button>
//       <ul>
//         {todo.map((item, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={item.checked}
//               onChange={() => toggleCheckbox(index)}
//             />
//             {item.task}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
