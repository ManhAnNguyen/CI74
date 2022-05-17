import React, { createContext } from "react";
import Button from "./component/Button";
import Title from "./component/Title";
const data = [1, 2, 3, 4, 5];

export const TitleContext = createContext(); //tạo ra context

const App = () => {
  return (
    <>
      <TitleContext.Provider value={data}>
        <Title />
        <Button />
      </TitleContext.Provider>
    </>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import ReactLoading from "react-loading";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ImHome } from "react-icons/im";
// import { MdHomeMax } from "react-icons/md";

// const App = () => {
//   const [todos, setTodos] = useState(null);
//   const [isLoading, setLoading] = useState(false);

//   const handleFetch = async () => {
//     setLoading(true);
//     setTimeout(async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todoss");

//       if (res.ok) {
//         const data = await res.json();
//         setTodos(data);
//         toast.success("Call api successfully!!!");
//       } else {
//         console.log("error");
//         toast.error("Call api failed!!!");
//       }

//       setLoading(false);
//     }, 3000);
//   };

//   // console.log(todos);
//   return (
//     <div>
//       <ImHome color="red" fontSize={"32px"} />
//       <button className="button" onClick={handleFetch}>
//         {isLoading ? (
//           <ReactLoading type="spin" color="white" height="20px" width="20px" />
//         ) : (
//           " FETCH TODOS"
//         )}
//       </button>

//       {todos && todos.map((t, index) => <h1 key={index}>{t.title}</h1>)}
//       <ToastContainer />
//     </div>
//   );
// };

// export default App;
