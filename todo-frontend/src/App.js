import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [task, setTask] = useState(" ");
  const [tasklist, setTasklist] = useState([]);
  let [completed, setCompleted] = useState(false);
  // const [name, setName] = useState(" ")

 

  useEffect(() => {


    axios.get("http://localhost:3000/todo").then((res) => {
      setTasklist(res.data);
    }).catch((err) => console.log(err))
  });

  const updatetask = (id) => {

        console.log(`${id} is being updated`);
    axios.put(`http://localhost:3000/todo/${id}`, {
      id: id,
      completed: completed,
    });             
    console.log(completed);                                   
    alert("You are Updating a Task Status");

  };
  function deletetask(id){
    axios.delete(`http://localhost:3000/todo/${id}`).then(()=>{
      console.log(`${id} deleted successfully`);
    }).catch((err) => console.log(err))
  };

  const addToList = (event) => {
        event.preventDefault();
alert("You are Adding Task in Today's Plan");
    axios.post("http://localhost:3000/todo", { task: task });
    setTask("  ");
  };
  

  return (
    <>
    {/* <form action="" onClick={submitform}> */}
    <center>
          <div className="todomain">
      <h1> What's the Plan for Today ?</h1>
      <div className="App">
        <input
          type="text"
          placeholder="Enter The Task"
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button style={{background: "purple", color:"white", cursor:"pointer",border: "none", fontFamily: "Arial" }}
         onClick={addToList}> ADD </button>
      </div>
      {/* <h1> Added Tasks</h1> */}
      <br></br>

      {tasklist.map((val, key) => {
        return (
          <div key={key}>
            <center>
              <table>
                <tr>
                 
                   <td> <input
                      type="checkbox"
                      defaultChecked={val.completed}
                      onChange={(event) => {
                        setCompleted(completed= !completed);
                      }}
                    ></input></td>
                  
                  <td><input type="text" value={val.task} /></td>
            
                  <td>
                    <button 
                    // disabled = {val.completed}
                    onClick={() => updatetask(val._id)}
                    style={{background: "#4CAF50", color:"white", cursor:"pointer", border: "none"}}
                    >UPDATE </button>
                  </td>
                  <td>
                    <button style={{background: "red", color:"white", cursor:"pointer",border: "none" }}
                    onClick={() => deletetask(val._id)}> DELETE</button>
                    </td>
                </tr>
              </table>
            </center>
          </div>
        );
      })}
      </div>
      <br></br>
      <br></br>
      </center>


    </>
  );
}

export default App;

















// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [task, setTask] = useState(" ");
//   const [tasklist, setTasklist] = useState([]);
//   let [completed, setCompleted] = useState(false);
//   // const [name, setName] = useState("not completed")

//   useEffect(() => {
//     axios.get("http://localhost:3000/todo").then((res) => {
//       setTasklist(res.data);
//     }).catch((err) => console.log(err))
//   });

//   const updatetask = (id) => {
//         console.log(`${id} is being uodated`);
//     axios.put(`http://localhost:3000/todo/${id}`, {
//       id: id,
//       completed: completed,
//     });             
//     console.log(completed);                                  
//     // setName("completed");
//   };
//   function deletetask(id){
//     axios.delete(`http://localhost:3000/todo/${id}`).then(()=>{
//       console.log(`${id} deleted successfully`);
//     }).catch((err) => console.log(err))
//   };

//   const addToList = (event) => {
//         event.preventDefault(" ");

//     axios.post("http://localhost:3000/todo", { task: task });
//     // event.preventDefault();
//   };

//   return (
//     <>
//       {/* <form> */}
//       <h1> TODAYS TODO </h1>
//       <div className="App">
//         <input
//           type="text"
//           placeholder="Enter The Task"
//           onChange={(event) => {
//             setTask(event.target.value);
//           }}
//         />
//         <button onClick={addToList}> ADD </button>
//       </div>
//       <h1> Added Tasks</h1>

//       {tasklist.map((val, key) => {
//         return (
//           <div key={key}>
//             <center>
//               <table>
//                 <tr>
//                   <th>
//                    <td> <input
//                       type="checkbox"
//                       defaultChecked={val.completed}
//                       onChange={(event) => {
//                         setCompleted(completed = !completed);
//                       }}
//                     ></input></td>
//                   </th>
//                   <th><td><input type="text" value={val.task} /></td></th>
//                   <th>
//                   <td>
//                     <button 
//                     // disabled = {val.completed}
//                     onClick={() => updatetask(val._id)}>UPDATE</button>
//                   </td></th>
//                   <th><td>
//                     <button onClick={() => deletetask(val._id)}> DELETE</button>
//                     </td></th>
//                 </tr>
//               </table>
//             </center>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default App;




// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./App.css";

// // function App() {
// //   const [task, setTask] = useState(" ");
// //   const [tasklist, setTasklist] = useState([]);
// //   let [completed, setCompleted] = useState(false);
// //   // const [name, setName] = useState("not completed")

// //   useEffect(() => {
// //     axios.get("http://localhost:3000/todo").then((res) => {
// //       setTasklist(res.data);
// //     }).catch((err) => console.log(err))
// //   });

// //   const updatetask = (id) => {
// //         console.log(`${id} is being uodated`);
// //     axios.put(`http://localhost:3000/todo/${id}`, {
// //       id: id,
// //       completed: completed,
// //     });             
// //     console.log(completed);                                  
// //     // setName("completed");
// //   };
// //   function deletetask(id){
// //     axios.delete(`http://localhost:3000/todo/${id}`).then(()=>{
// //       console.log(`${id} deleted successfully`);
// //     }).catch((err) => console.log(err))
// //   };

// //   const addToList = (event) => {
// //     axios.post("http://localhost:3000/todo", { task: task });
// //     // event.preventDefault();
// //   };

// //   return (
// //     <>
// //       {/* <form> */}
// //       <h1> TODAYS TODO </h1>
// //       <div className="App">
// //         <input
// //           type="text"
// //           placeholder="Enter The Task"
// //           onChange={(event) => {
// //             setTask(event.target.value);
// //           }}
// //         />
// //         <button onClick={addToList}> ADD </button>
// //       </div>
// //       <h1> Added Tasks</h1>

// //       {tasklist.map((val, key) => {
// //         return (
// //           <div key={key}>
// //             <center>
// //               <table>
// //                 <tr>
// //                   <th>
// //                    <td> <input
// //                       type="checkbox"
// //                       defaultChecked={val.completed}
// //                       onChange={(event) => {
// //                         setCompleted(completed= !completed);
// //                       }}
// //                     ></input></td>
// //                   </th>
// //                   <th><td><input type="text" value={val.task} /></td></th>
// //                   <th>
// //                   <td>
// //                     <button 
// //                     // disabled = {val.completed}
// //                     onClick={() => updatetask(val._id)}>UPDATE</button>
// //                   </td></th>
// //                   <th><td>
// //                     <button onClick={() => deletetask(val._id)}> DELETE</button>
// //                     </td></th>
// //                 </tr>
// //               </table>
// //             </center>
// //           </div>
// //         );
// //       })}
// //     </>
// //   );
// // }

// // export default App;

